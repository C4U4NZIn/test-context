import * as zod from 'zod';

export const schemaUserNameInformation = zod.object({

    username: zod
    .string()
    .min(8, "Informe seu nome completo")
    .regex(/^[A-Za-z]+$/i,"One letters alowed"),
  
    nickname: zod
    .string()
    .min(3,"Informe um apelido maior")
    .max(12,"informe um apelido menor")
    .regex(/^[A-Za-z]+$/i,"One letters alowed")

});


export type userNameInformationSchemaProps = zod.infer<typeof schemaUserNameInformation>
