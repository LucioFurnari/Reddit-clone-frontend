import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().trim().min(1, "Email is required").email("The email is not valid").min(5, "The email must be at least 5 characters long"),
  password: z.string().trim().min(6, "The password must be at least 6 characters long"),
});