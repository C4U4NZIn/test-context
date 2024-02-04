import { Controller , useFormContext } from "react-hook-form";
import {registrationFormSchemaProps } from "../Forms/RegistrationForm";
import { Input } from '../components/components-ui/Input';

   export default function UserNameInformation () {

    const {
     control,
     formState:{errors}  
     } = useFormContext<registrationFormSchemaProps>();



     return (
        <div>
               
          <fieldset>

          

         <Controller
         name="userNameInformation.username"
         defaultValue=""
         control={control}
         render={({field})=> (
            <Input
            {...field}
            type="text"
            label="Nome"
            errorMessage={errors?.userNameInformation?.username?.message}
           
            />         
          )
         }
         
         />

        

         <Controller
         name="userNameInformation.nickname"
         defaultValue=""
         control={control}
         render={({field})=> (
            <Input
            {...field}
            type="text"
            label="Nickname"
            errorMessage={errors?.userNameInformation?.nickname?.message}
           
            />         
          )
         }
         
         />

        
         
         
         

          </fieldset>
        
    
        </div>
     )




}