import { z } from "zod";

export const signipSchema = z.object({
  email: z.string().trim().min(1, "Email is required").email("The email is not valid").min(5, "The email must be at least 5 characters long"),
  username: z.string().trim().min(1, "Username is required").min(3, "The username must be at least 3 characters long"),
  password: z.string().trim().min(6, "The password must be at least 6 characters long"),
  confirmPassword: z.string().trim().min(6, "The password must be at least 6 characters long"),
})
.refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});