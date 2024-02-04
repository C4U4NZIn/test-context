import * as zod from 'zod';

import { 
    schemaUserEmailTelInformation , 
    userEmailTelInformationSchemaProps } 
    from './schemaUserEmailTelInformation';
import { 
    schemaUserNameInformation ,
    userNameInformationSchemaProps } 
    from './schemaUserNameInformation';
import { 
    schemaUserPasswordInformation ,
    userPasswordInformationsSchemaProps } 
    from './schemaUserPasswordInformation';

// I just doing this , cuz it´s prettier than other forms to do this
    export enum RegistrationFormTypeEnum {
        UserNameInformation = 'userNameInformation',
        UserEmailTelInformation = 'userEmailTelInformation',
        UserPasswordInformation = 'userPasswordInformation',
     }


   // t=This object is the schema ealier just a little bit stronger
   // what I mean is that registrationForm is a schema with the field.
   //However, its a filter fields with formType
    export  const registrationFormSchema = zod.discriminatedUnion('formType',[
         
     zod.object({
     formType: zod.literal(RegistrationFormTypeEnum.UserNameInformation),
     UserNameInformation:schemaUserNameInformation,
     }),
     zod.object({
     formType: zod.literal(RegistrationFormTypeEnum.UserEmailTelInformation),
     UserEmailTelInformation: schemaUserEmailTelInformation
     }),
     zod.object({
     formType: zod.literal(RegistrationFormTypeEnum.UserPasswordInformation),
     UserPasswordInformation : schemaUserPasswordInformation
     })
    ]);
    
    export type registrationFormSchemaProps = {
        formType: RegistrationFormTypeEnum
        userNameInformation: userNameInformationSchemaProps
        userEmailTelInformation:userEmailTelInformationSchemaProps
        userPasswordInformation:userPasswordInformationsSchemaProps
    }