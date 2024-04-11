import { db } from "@/lib/db";

export const getVerificationTokenByToken = async (token: string) => {
  console.log("Token: ", token);

  try {
    const verificationToken = await db.verificationToken.findUnique({
      where: { token },
    });
    return verificationToken;
  } catch {
    console.log("catch");
  }
};

export async function getVerificationTokenByEmail(email: string) {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: {
        email,
      },
    });

    return verificationToken;
  } catch {
    return null;
  }
}
