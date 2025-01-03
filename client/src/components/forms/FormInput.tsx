import { forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: FieldError
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <label htmlFor={props.id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          ref={ref}
          className={`
            block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm
            ${error ? 'border-red-300' : 'border-gray-300'}
          `}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-600">{error.message}</p>
        )}
      </div>
    )
  }
) 