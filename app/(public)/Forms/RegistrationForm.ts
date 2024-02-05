import { z } from 'zod'
import {
  UsernameNicknameFormSchemaProps,
  usernameNicknameSchema,
} from '../Forms/schemaUserNameInformation'
import {
  UserEmailTelFormSchemaProps,
  userEmailTelSchema,
} from '../Forms/schemaUserPasswordInformation'
import {
  UserPasswordConfirmPasswordSchemaProps,
  userPasswordConfirmPasswordSchema,
} from '../Forms/schemaUserEmailTelInformation'
import { PaymentInformation } from '../components/UserEmailTelInformation'

export enum RegistrationFormTypeEnum {
  UsernameNickname = 'usernameNickname',
  UserEmailTel = 'userEmailTel',
  UserPasswordConfirmPassword = 'userPasswordConfirmPassword',
}

export const registrationFormSchema = z.discriminatedUnion('formType', [
  z.object({
    formType: z.literal(RegistrationFormTypeEnum.UsernameNickname),
    usernameNickname:usernameNicknameSchema,
  }),
  z.object({
    formType: z.literal(RegistrationFormTypeEnum.UserEmailTel),
    userEmailTel:userEmailTelSchema,
  }),
  z.object({
    formType: z.literal(RegistrationFormTypeEnum.UserPasswordConfirmPassword),
    userPasswordConfirmPassword: userPasswordConfirmPasswordSchema,
  }),
])

export type RegistrationFormSchemaProps = {
  formType: RegistrationFormTypeEnum
  usernameNickname: UsernameNicknameFormSchemaProps
  userEmailTel:UserEmailTelFormSchemaProps
  userPasswordConfirmPassword:UserPasswordConfirmPasswordSchemaProps
}
