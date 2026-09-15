import { z } from "zod";

// 1. Define the RAW account schema object (without refine) so it can be merged
export const accountBaseSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password should be at least 6 characters"),
  confirm_password: z
    .string()
    .min(6, "Password should be at least 6 characters"),
});

export const personalInfoSchema = z.object({
  username: z.string().min(2, "Username should be at least 2 characters"),
  first_name: z.string().min(2, "First name should be at least 2 characters"),
  last_name: z.string().min(2, "Last name should be at least 2 characters"),
});

export const securitySchema = z.object({
  reset_password_question: z
    .string()
    .min(2, "Reset password question should be at least 2 characters"),
  reset_password_answer: z
    .string()
    .min(2, "Reset password answer should be at least 2 characters"),
});

export const registerDataSchema = z
  .object({
    ...accountBaseSchema.shape,
    ...personalInfoSchema.shape,
    ...securitySchema.shape,
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export type RegisterData = z.infer<typeof registerDataSchema>;
