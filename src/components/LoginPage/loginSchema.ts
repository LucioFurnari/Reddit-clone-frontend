import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().trim().email("The email is not valid"),
  password: z.string().trim().min(6, "The password must be at least 6 characters long"),
});