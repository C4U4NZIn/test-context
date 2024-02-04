import * as zod from 'zod';


export const schemaUserPasswordInformation = zod.object({

    password: zod
    .string()
    .min(8,"Your password must be a 8 caracters"),

    ConfirmPassword: zod
    .string()
    .min(8,'Your password must be a 8 caracters'),

});

export type userPasswordInformationsSchemaProps = zod.infer<typeof schemaUserPasswordInformation>