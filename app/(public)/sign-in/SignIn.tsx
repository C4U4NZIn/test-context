'use client';
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import api from '../../__api';
import { Button } from '../components/Button/Button'
import { useEffect } from 'react';

import { UserEmailTel } from '../components/UserEmailTel'
import { UserPasswordConfirmPassword } from '../components/UserPasswordConfirmPassword.'
import { UsernameNickname } from '../components/UsernameNickname'

import {
  RegistrationFormSchemaProps,
  RegistrationFormTypeEnum,
  registrationFormSchema,
} from '../Forms/RegistrationForm'
import { resolve } from 'path';

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
        
        const { usernameNickname,userEmailTel,userPasswordConfirmPassword } = getValues()
        
        const UserFinalDataSendedToApi = {
        ...usernameNickname,...userEmailTel,
        password: userPasswordConfirmPassword.password
      }

   
      api.post('/post', {
        username: UserFinalDataSendedToApi.username,
        nickname:UserFinalDataSendedToApi.nickname,
        email:UserFinalDataSendedToApi.email,
        phone:UserFinalDataSendedToApi.phone,
        password:UserFinalDataSendedToApi.password
      }).then(resolve=>{
        console.log(resolve.data);
      }).catch((error)=>{
        console.log(error);
      })
      
   
   
       
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
