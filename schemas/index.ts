import * as z from "zod";

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
