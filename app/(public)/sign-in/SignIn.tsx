'use client';
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import { Button } from '../components/Button/Button'

import { ShippingAddress } from '../components/UserPasswordInformation'
import { PaymentInformation } from '../components/UserEmailTelInformation'
import { PersonalInformation } from '../components/UserNameInformation'

import {
  RegistrationFormSchemaProps,
  RegistrationFormTypeEnum,
  registrationFormSchema,
} from '../Forms/RegistrationForm'

export function RegistrationForm() {


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
  const formTypeIsPersonalInformation = formType === 'usernameNickname'
  const formTypeIsShippingAddress = formType === 'userEmailTel'
  const formTypeIsPaymentInformation = formType === 'userPasswordConfirmPassword'

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
        {formTypeIsPersonalInformation && <PersonalInformation />}
        {formTypeIsShippingAddress && <ShippingAddress />}
        {formTypeIsPaymentInformation && <PaymentInformation />}

        <Button
          type="submit"
          loading={isSubmitting}
         
        >
          {formTypeIsPaymentInformation ? 'Submit' : 'Next'}
        </Button>
      </form>
    </FormProvider>
  )
}
