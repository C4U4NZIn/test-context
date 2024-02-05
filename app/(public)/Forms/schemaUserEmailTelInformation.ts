import { z } from 'zod'

export const userPasswordConfirmPasswordSchema = z.object({
  password: z
  .string()
  .min(8,"Your password must be a 8 caracters")
  ,
  ConfirmPassword: z
  .string()
  .min(8,'Your password must be a 8 caracters'),
  
})

export type UserPasswordConfirmPasswordSchemaProps = z.infer<
  typeof userPasswordConfirmPasswordSchema
>
