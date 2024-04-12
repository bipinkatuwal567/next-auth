import { db } from "@/lib/db";

export async function getPasswordResetTokenByToken(token: string) {
  try {
    const passwordToken = await db.passwordRestToken.findUnique({
      where: { token },
    });
    return passwordToken;
  } catch {
    return null;
  }
}

export async function getPasswordResetTokenByEmail(email: string) {
  try {
    const passwordToken = await db.passwordRestToken.findFirst({
      where: { email },
    });
    return passwordToken;
  } catch {
    return null;
  }
}
