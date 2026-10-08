import z from "zod";

export const loginSchema = z
  .object({
    phone: z
      .string({ message: "Phone must be a string" })
      .min(11, { message: "Phone must be at least 11 characters long" })
      .trim(),
    password: z.string({ message: "Password must be a string" }).trim(),
  })
  .strict();
