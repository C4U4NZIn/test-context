import { z } from 'zod'

export const userEmailTelSchema = z.object({
  email: z
  .string()
  .email()
  .refine(email=>/^[\w.+\-]+@gmail\.com$/.test(email),{
   message:"O email deve ser um endereço gmail válido"
  }),
phone: z
.string()
.min(1, 'Phone is required')
.max(20, 'Phone is invalid'),
})

export type UserEmailTelFormSchemaProps = z.infer<
  typeof userEmailTelSchema
>
