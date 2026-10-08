import { UserRoles } from "@types";
import { z } from "zod";

export const createUserSchema = z
  .object({
    email: z
      .string({ message: "Email must be a string" })
      .email({ message: "Please provide a valid email address." })
      .trim(),
    password: z
      .string({ message: "Password must be a string" })
      .min(8, { message: "Password must be at least 8 characters long." })
      .trim(),

    phone: z
      .string({ message: "Phone must be a string" })
      .min(14, { message: "Phone must be 14 characters long" })
      .trim(),

    username: z
      .string({ message: "Username must be a string" })
      .min(3, { message: "Username must be at least 3 characters long." })
      .trim(),
    role: z
      .enum([UserRoles.Admin, UserRoles.User], {
        message: "Role must be either Admin or User",
      })
      .optional()
      .default(UserRoles.User),
  })
  .strict();

export type CreateUser = z.infer<typeof createUserSchema>;
