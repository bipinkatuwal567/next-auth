"use server";

import { getUserByEmail, getUserById } from "@/data/user";
import bcrypt from "bcryptjs"
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";
import { settingsSchema } from "@/schemas";
import { error } from "console";
import { z } from "zod";

export default async function settings(
    values: z.infer<typeof settingsSchema>
){
    const user = await currentUser();

    if(!user){
        return {
            error: "Unauthorized"
        }
    }

    const dbUser = await getUserById(user.id);

    if(!dbUser){
        return{
            error: "Unauthorized"
        }
    }

    if(user.isOAuth){
        values.email = undefined;
        values.password = undefined;
        values.newPassword = undefined;
        values.isTwoFactorEnabled = undefined;
    }

    if(values.email && values.email !== user.email){
        const existingUser = await getUserByEmail(values.email);

        if(existingUser && existingUser.id !== user.id){
            return {error: "Email is already in use!"}
        }

        const verificationToken = await generateVerificationToken(values.email);
        await sendVerificationEmail(
            verificationToken.email,
            verificationToken.token,
        )

        return {success: "Verification email sent!"}
    }

    if(values.password && values.newPassword && dbUser.password){
        const passwordMatch = await bcrypt.compare(
            values.password,
            dbUser.password,
        );

        if(!passwordMatch){
            return {error: "Incorret Password!"}
        }

       const hashedPassword = await bcrypt.hash(
        values.newPassword,
        10,
       ) 
       values.password = hashedPassword;
       values.newPassword = undefined;
    }

    await db.user.update({
        where: {id: dbUser.id},
        data: {
            ...values,
        }
    })

    return {success: "Settings updated"}
}