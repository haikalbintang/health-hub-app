import { z } from "zod";

export const accountSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password should be at least 6 characters"),
  confirmPassword: z
    .string()
    .min(6, "Password should be at least 6 characters"),
});

export const personalInfoSchema = z.object({
  username: z.string().min(2, "Username should be at least 2 characters"),
  firstName: z.string().min(2, "First name should be at least 2 characters"),
  lastName: z.string().min(2, "Last name should be at least 2 characters"),
});

export const securitySchema = z.object({
  resetPasswordQuestion: z
    .string()
    .min(2, "Reset password question should be at least 2 characters"),
  resetPasswordAnswer: z
    .string()
    .min(2, "Reset password answer should be at least 2 characters"),
});

export const registerDataSchema = accountSchema
  .merge(personalInfoSchema)
  .merge(securitySchema);

export type RegisterData = z.infer<typeof registerDataSchema>;
