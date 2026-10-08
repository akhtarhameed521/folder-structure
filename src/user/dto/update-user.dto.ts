import { UserRoles } from "@types";
import z from "zod";

export const updateUserSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).optional(),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }).optional(),
  username: z.string().min(3, { message: "Username must be at least 3 characters" }).optional(),
  role: z.enum([UserRoles.Admin, UserRoles.User], {
    message: "Role must be either Admin or User",
  }).optional().default(UserRoles.User),
});