import { Controller, useFormContext } from 'react-hook-form'

import { Input } from '../components/components-ui/Input'
import { RegistrationFormSchemaProps } from '../Forms/RegistrationForm'

export function PaymentInformation() {
  const {
    control,
    formState: { errors },
  } = useFormContext<RegistrationFormSchemaProps>()

  return (
    <fieldset
    
    >
      <legend
       
      >
        Step Three
      </legend>
      <div className="space-y-4">
        <Controller
          name='userPasswordConfirmPassword.password'
          defaultValue=""
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              inputMode="text"
              label="Password"
              errorMessage={errors?.userPasswordConfirmPassword?.password?.message}
              
            />
          )}
        />
        <Controller
          name="userPasswordConfirmPassword.ConfirmPassword"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              label="Confirm Password"
              errorMessage={errors?.userPasswordConfirmPassword?.ConfirmPassword?.message}
            
            />
          )}
        />
     
      </div>
    </fieldset>
  )
}
