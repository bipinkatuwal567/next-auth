"use server";
import { registerSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof registerSchema>) => {
  const validateRegister = registerSchema.safeParse(values);

  if (!validateRegister.success) {
    return { error: "Something went wrong" };
  }

  const { email, password, name } = validateRegister.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "User already exist" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);

  /* Verification email sending */
  await sendVerificationEmail(
    verificationToken.email,
    verificationToken.token,
  )

  return { success: "Confirmation email sent!" };
};
