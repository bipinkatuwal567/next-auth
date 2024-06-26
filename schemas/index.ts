import { UserRole } from "@prisma/client";
import * as z from "zod";

export const settingsSchema = z.object({
  name: z.optional(z.string()),
  isTwoFactorEnabled: z.optional(z.boolean()),
  role: z.enum([UserRole.ADMIN, UserRole.USER]),
  email: z.optional(z.string().email()),
  password: z.optional(z.string().min(6)),
  newPassword: z.optional(z.string().min(6)),
})
.refine((data) => {
  if(data.password && !data.newPassword){
    return false;
  }

  if(data.newPassword && !data.password){
    return false;
  }

  return true;
}, {
  message: "New Password is required",
  path: ["newPassword"],
});


export const loginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(
    z.string().min(6, {
      message: "Invalid code",
    })
  ),
});

export const registerSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters",
  }),
  name: z.string().min(3, {
    message: "Name is required",
  }),
});

export const resetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const passwordResetSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
});
