import { db } from "@/lib/db";

export async function getTwoFactorConfirmation(userId: string) {
  try {
    const twoFactorVerification = await db.twoFactorConfirmation.findUnique({
      where: { userId },
    });

    return twoFactorVerification;
  } catch (error) {
    return null;
  }
}
