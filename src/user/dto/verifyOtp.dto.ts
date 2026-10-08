import { z } from "zod";

export const verifyOtpSchema = z
  .object({
    email: z
      .string({ message: "Email must be a string" })
      .email({ message: "Please provide a valid email address." })
      .trim(),
    otp: z
      .string({ message: "OTP must be a string" })
      .length(6, { message: "OTP must be 6 digits long" })
      .regex(/^\d+$/, { message: "OTP must contain only digits" }),
  })
  .strict();

export type VerifyOtpDto = z.infer<typeof verifyOtpSchema>;