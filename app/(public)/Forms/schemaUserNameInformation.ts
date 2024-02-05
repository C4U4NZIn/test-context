import { z } from 'zod'

export const usernameNicknameSchema = z.object({
  username: z
  .string()
  .min(8, "Informe seu nome completo")
  .regex(/^[a-zA-Z\u00C0-\u00FF ]*$/i  ,"One letters alowed"),
  nickname: z
  .string()
  .min(3,"Informe um apelido maior")
  .max(12,"informe um apelido menor")
  .regex(/^[A-Za-z]+$/i,"One letters alowed"),
 
})

export type UsernameNicknameFormSchemaProps = z.infer<
  typeof usernameNicknameSchema
>
