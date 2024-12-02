import z from 'zod';

const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

const UserSchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string().email("Invalid email address"),
  password: z.string()
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password must be no more than 20 characters long")
    .regex(passwordRegex, "Password must contain at least one uppercase letter, one number, and one symbol"),
  language: z.string()
});

export type UserSchemaType = z.infer<typeof UserSchema>;
export default UserSchema;