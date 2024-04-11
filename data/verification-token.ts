import { db } from "@/lib/db";

export async function getVerificationTokenByToken(token: string) {
  console.log("Token: ", token);

  try {
    const verificationToken = await db.verificationToken.findUnique({
      where: {
        token,
      },
    });
    console.log(verificationToken);
    
    return verificationToken;
  } catch {
    return null;
  }
}

export async function getVerificationTokenByEmail(email: string) {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: {
        email,
      },
    });

    return verificationToken;
  } catch (error) {
    return null;
  }
}
