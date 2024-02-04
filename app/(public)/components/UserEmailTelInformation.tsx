import { Controller , useFormContext } from "react-hook-form";
import {registrationFormSchemaProps } from "../Forms/RegistrationForm";
import { Input } from '../components/components-ui/Input';



export default function UserEmailTelInformation() {  
   
   
   
   const { 
      control , 
      formState:{errors}
      } = useFormContext<registrationFormSchemaProps>();
   


   return (
    <div>
           
           <fieldset>

     
          
           <Controller
         name="userEmailTelInformation.email"
         defaultValue=""
         control={control}
         render={({field})=> (
            <Input
            {...field}
            type="email"
            label="Email"
            errorMessage={errors?.userEmailTelInformation?.email?.message}
           
            />         
          )
         }
         
         />

         
           
         
         <Controller
         name="userEmailTelInformation.tel"
         defaultValue=""
         control={control}
         render={({field})=> (
            <Input
            {...field}
            type="tel"
            label="Telefone"
            errorMessage={errors?.userEmailTelInformation?.tel?.message}
           
            />         
          )
         }
         
         />

       </fieldset>






           {/**
            * 
            <label><h6>Email</h6></label>
            <input
             
            type="email" 
           // {...register('email')}
            />
            <label><h6>Tel</h6></label>
            <input 
            type='tel'
         //   {...register('tel')}
            />
            * 
            */}
           
                </div>
   )



}