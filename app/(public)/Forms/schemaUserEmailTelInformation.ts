import * as zod from 'zod';

export const schemaUserEmailTelInformation = zod.object({

    email: zod
    .string()
    .email()
    .refine(email=>/^[\w.+\-]+@gmail\.com$/.test(email),{
     message:"O email deve ser um endereço gmail válido"
    }),
    tel: zod
    .string()
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/,"Please digit your right number ")
 


});

  export type userEmailTelInformationSchemaProps = zod.infer<typeof schemaUserEmailTelInformation>