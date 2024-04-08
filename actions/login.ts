'use server';

import * as z from "zod";
import { loginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof loginSchema>) => {
    const validateValues = loginSchema.safeParse(values);

    if(!validateValues.success){
        return {error: "Invalid Credentials!"}
    }

    return { success: "Email Sent!"}
}