'use client';
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import { Button } from '../components/Button/Button'

import { UserEmailTel } from '../components/UserEmailTel'
import { UserPasswordConfirmPassword } from '../components/UserPasswordConfirmPassword.'
import { UsernameNickname } from '../components/UsernameNickname'

import {
  RegistrationFormSchemaProps,
  RegistrationFormTypeEnum,
  registrationFormSchema,
} from '../Forms/RegistrationForm'

export function RegistrationFormSignIn() {


  const formMethods = useForm<RegistrationFormSchemaProps>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      formType: RegistrationFormTypeEnum.UsernameNickname,
    },
  })

  const {
    watch,
    getValues,
    handleSubmit,
    formState: { isSubmitting },
  } = formMethods

  const formType = watch('formType')
  const formTypeIsUsernameNickname = formType === 'usernameNickname'
  const formTypeIsUserEmailTel = formType === 'userEmailTel'
  const formTypeIsUserPasswordConfirmPassword = formType === 'userPasswordConfirmPassword'

  function setFormType(formType: RegistrationFormTypeEnum) {
    console.log(formType);
    formMethods.setValue('formType', formType)
  }

  function handleNextFormType() {
    console.log(formType);
    switch (formType) {
      case 'usernameNickname':
        setFormType(RegistrationFormTypeEnum.UserEmailTel)
        break
      case 'userEmailTel':
        setFormType(RegistrationFormTypeEnum.UserPasswordConfirmPassword)
        break
      case 'userPasswordConfirmPassword':
        const UserData = getValues()
        console.log('submit', UserData)
        break
    }
  }

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={handleSubmit(handleNextFormType)}
      >
        {formTypeIsUsernameNickname && <UsernameNickname />}
        {formTypeIsUserEmailTel && <UserEmailTel />}
        {formTypeIsUserPasswordConfirmPassword  && <UserPasswordConfirmPassword />}

        <Button
          type="submit"
          loading={isSubmitting}
         
        >
          {formTypeIsUserPasswordConfirmPassword  ? 'Submit' : 'Next'}
        </Button>
      </form>
    </FormProvider>
  )
}
