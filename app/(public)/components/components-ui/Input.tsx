import * as React from 'react'



export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  errorMessage?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, errorMessage, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label htmlFor="">{label}</label>
        <input
          type={type}
          ref={ref}
          {...props}
        />

        {errorMessage && (
          <span
          >
            {errorMessage}
          </span>
        )}
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
