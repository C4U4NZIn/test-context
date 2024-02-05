import { Controller, useFormContext } from 'react-hook-form'

import { Input } from '../components/components-ui/Input'
import { RegistrationFormSchemaProps } from '../Forms/RegistrationForm'

export function ShippingAddress() {
  const {
    control,
    formState: { errors },
  } = useFormContext<RegistrationFormSchemaProps>()

  return (
    <fieldset
      className="space-y-4"
      data-testid="shipping-address-component-container"
    >
      <legend
        className="text-xl font-semibold mx-auto"
        data-testid="shipping-address-component-title"
      >
        Step Two
      </legend>
      <Controller
        name='userEmailTel.email'
        defaultValue=""
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            type="text"
            label="Email"
            errorMessage={errors?.userEmailTel?.email?.message}
           
          />
        )}
      />
      <Controller
        name='userEmailTel.phone'
        defaultValue=""
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            type="text"
            label="Telefone"
            errorMessage={errors?.userEmailTel?.phone?.message}
            
          />
        )}
      />
     
    </fieldset>
  )
}
