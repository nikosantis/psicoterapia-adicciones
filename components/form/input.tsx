'use client'

import {
  forwardRef,
  RefAttributes,
  InputHTMLAttributes as ReactInputHTMLAttributes
} from 'react'
import cx from 'clsx'

export interface IInputProps {
  valid?: boolean
  invalid?: boolean
  disabled?: ReactInputHTMLAttributes<HTMLInputElement>['disabled']
  required?: ReactInputHTMLAttributes<HTMLInputElement>['required']
  readOnly?: ReactInputHTMLAttributes<HTMLInputElement>['readOnly']
  type?: ReactInputHTMLAttributes<HTMLInputElement>['type']
  'aria-label'?: string
  'aria-describedby'?: string
}

type OmittedTypes = 'size' | 'required' | 'checked' | 'defaultChecked'

export type InputHTMLAttributes = Omit<
  ReactInputHTMLAttributes<HTMLInputElement>,
  OmittedTypes
>

export type InputProps<T = HTMLInputElement> = IInputProps &
  ReactInputHTMLAttributes<T> &
  RefAttributes<T>

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedby,
      className,
      type = 'text',
      required,
      valid,
      invalid,
      readOnly,
      disabled,
      ...rest
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        readOnly={readOnly}
        aria-readonly={readOnly}
        disabled={disabled}
        aria-disabled={disabled}
        aria-label={ariaLabel}
        aria-invalid={invalid}
        required={required}
        aria-required={required}
        aria-describedby={ariaDescribedby}
        className={cx(
          'w-full rounded block border-slate-300 text-sm outline-none',
          'focus:outline-none focus:ring-0 focus:shadow-none',
          'transition-all',
          {
            'border-green-400 focus:border-green-400': valid,
            'border-red-400 focus:border-red-400': !valid && invalid
          }
        )}
        {...rest}
      />
    )
  }
)

Input.displayName = 'Input'

export default Input
