import { registerSchema } from "@/schemas";
import * as z from "zod";

export const register = async (values: z.infer<typeof registerSchema>) => {
  const validateRegister = registerSchema.safeParse(values);

  if (!validateRegister) {
    return { error: "Something went wrong" };
  }

  return { success: "Email sent" };
};
