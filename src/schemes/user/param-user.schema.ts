import z from 'zod';

const userParamSchema = z.object({
  id: z.number()
});

export type UserParamSchemaType = z.infer<typeof userParamSchema>;
export default userParamSchema;