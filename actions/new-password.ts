"use server";

import { getPasswordResetTokenByToken } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs";
import { passwordResetSchema } from "@/schemas";
import { z } from "zod";
import { db } from "@/lib/db";

export async function NewPassword(
  values: z.infer<typeof passwordResetSchema>,
  token: string | null
) {
  if (!token) {
    return {
      error: "Token missing!",
    };
  }
  const validatedFields = passwordResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid Fields!",
    };
  }

  const { password } = validatedFields.data;

  const existingToken = await getPasswordResetTokenByToken(token);

  if (!existingToken) {
    return {
      error: "Invalid token!",
    };
  }

  const hasExpiredToken = new Date(existingToken.expires) < new Date();

  if (hasExpiredToken) {
    return {
      error: "Token has expired!",
    };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "Email does not exist" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.update({
    where: { id: existingUser.id },
    data: {
      password: hashedPassword,
    },
  });

  await db.passwordRestToken.delete({
    where: { id: existingToken.id },
  });

  return {
    success: "Password updated!",
  };
}
