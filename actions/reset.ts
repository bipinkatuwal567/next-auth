"use server";

import { getUserByEmail } from "@/data/user";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordToken } from "@/lib/tokens";
import { resetSchema } from "@/schemas";
import { z } from "zod";

export async function reset(values: z.infer<typeof resetSchema>) {
  const validatedFields = resetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid email!" };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return {
      error: "Email doesn't exist!",
    };
  }

  const passwordRestToken = await generatePasswordToken(email);
  await sendPasswordResetEmail(
    passwordRestToken.email,
    passwordRestToken.token
  );

  // TODO: Generate token & send email
  return {
    success: "Reset email sent!",
  };
}
