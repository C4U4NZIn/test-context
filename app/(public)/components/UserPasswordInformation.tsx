import { Controller , useFormContext } from "react-hook-form";
import {registrationFormSchemaProps } from "../Forms/RegistrationForm";
import { Input } from '../components/components-ui/Input';

export default function UserPasswordInformation() {

   const {
   control,
   formState:{errors}
   } = useFormContext<registrationFormSchemaProps>();



    return (
        <div>

        <fieldset>

       <legend>Password</legend>

         
       <Controller
         name="userPasswordInformation.password"
         defaultValue=""
         control={control}
         render={({field})=> (
            <Input
            {...field}
            type="password"
            label="Password"
            errorMessage={errors?.userPasswordInformation?.password?.message}
           
            />         
          )
         }
         
         />
        
        <legend>Confirm Password</legend>

          
        <Controller
         name="userPasswordInformation.ConfirmPassword"
         defaultValue=""
         control={control}
         render={({field})=> (
            <Input
            {...field}
            type="password"
            label="Confirm Password"
            errorMessage={errors?.userPasswordInformation?.ConfirmPassword?.message}
           
            />         
          )
         }
         
         />




        </fieldset>




            {/**
         <div>
                <label><h6>Password</h6></label>
                <input 
                type="password" 
                //{...register('password')}
                />
                <label><h6>Tel</h6></label>
                <input 
                type='password'
               // {...register('ConfirmPassword')}
                />
                </div>
             * 
             */}
        </div>
    )
}