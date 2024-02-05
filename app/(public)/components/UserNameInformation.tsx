import { Controller, useFormContext } from 'react-hook-form'

import { Input } from '../components/components-ui/Input'
import { RegistrationFormSchemaProps } from '../Forms/RegistrationForm'

export function PersonalInformation() {
  const {
    control,
    formState: { errors },
  } = useFormContext<RegistrationFormSchemaProps>()

  return (
    <fieldset
      
    >
      <legend
       
      >
        Step One
      </legend>
      <Controller
        name='usernameNickname.username'
        defaultValue=""
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            type="text"
            label="Name"
            errorMessage={errors?.usernameNickname?.username?.message}
            
          />
        )}
      />
      <Controller
        name='usernameNickname.nickname'
        defaultValue=""
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            type="text"
            label="Nickname"
            errorMessage={errors?.usernameNickname?.nickname?.message}
           
          />
        )}
      />
     
    </fieldset>
  )
}
