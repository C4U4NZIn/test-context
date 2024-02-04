'use client';

import {
  RegistrationFormTypeEnum,
  registrationFormSchema,
  registrationFormSchemaProps
} from '../Forms/RegistrationForm';
import { useForm , FormProvider } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useState } from 'react';
import { Button } from '../components/Button/Button';


import UserNameInformation from '../components/UserNameInformation';
import UserEmailTelInformation from '../components/UserEmailTelInformation';
import UserPasswordInformation from '../components/UserPasswordInformation';

 

export const SignInFormRegister = () =>{


    

    const formMethods = useForm<registrationFormSchemaProps>({
       resolver:zodResolver(registrationFormSchema),
       defaultValues:{
        formType:RegistrationFormTypeEnum.UserNameInformation,
       }
    });

      const {
         watch,
         getValues,
         handleSubmit,
         formState:{ isSubmitting }
       } = formMethods

       const formType = watch('formType');
       const formTypeIsUserName = formType === 'userNameInformation'
       const formTypeIsUserEmailTel = formType === 'userEmailTelInformation'
       const formTypeIsUserPassword = formType === 'userPasswordInformation'
      {/** 
      function onHandleNextAndSubmit(data:userFormInput){
      console.log(data);
      }
    
    */}



    function setFormType(formType:RegistrationFormTypeEnum){
      console.log(formType);
      console.log(formMethods);
      formMethods.setValue('formType',formType);
      }

       function onHandleSubmitAndNext(){
        console.log(formType);
        console.log(formMethods);
        switch(formType){

          case 'userNameInformation':
            setFormType(RegistrationFormTypeEnum.UserEmailTelInformation);
            break
          case 'userEmailTelInformation':
            setFormType(RegistrationFormTypeEnum.UserPasswordInformation);
            break
          case 'userPasswordInformation':
            console.log('submit', getValues());
            break
          

        }

        

       }

       //adiciona novas informações por schema. Por exemplo, se ela estiver no Name ent ela vai adicionar o name ao formMethods
      //chamada no switch da função onHandleNextAndSubmit que , obviamente, estará no meu mano onSubmit
       
      
    
 
      
    
        return(
         <div>
      
      

   <FormProvider {...formMethods}>

  <form onSubmit={handleSubmit(onHandleSubmitAndNext)}>
          
          
            {formTypeIsUserName && <UserNameInformation/>}
            {formTypeIsUserEmailTel && <UserEmailTelInformation/>}
            {formTypeIsUserPassword && <UserPasswordInformation/>}

            {/**
             * 
            <Button
           type="submit"
           loading={isSubmitting}
        >
          {formTypeIsUserPassword ? 'Submit' : 'Next'}
        </Button>
            */}
            
       
            <button type="submit"><h1>next</h1></button>
          
          
          
   </form>

   </FormProvider>


     </div>

        )
}