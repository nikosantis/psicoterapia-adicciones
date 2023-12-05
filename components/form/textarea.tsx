'use client'

import {
  TextareaHTMLAttributes as ReactTextareaHTMLAttributes,
  RefAttributes,
  forwardRef,
} from 'react'
import { cn } from '@/lib/utils'

export interface ITextareaProps {
  valid?: boolean
  invalid?: boolean
  'aria-label'?: string
  'aria-describedby'?: string
}

export type OmittedTypes = 'size' | 'checked' | 'defaultChecked'

type TextareaHTMLAttributes = Omit<
  ReactTextareaHTMLAttributes<HTMLTextAreaElement>,
  OmittedTypes
>

export interface TextareaProps
  extends TextareaHTMLAttributes,
    RefAttributes<HTMLTextAreaElement>,
    ITextareaProps {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedby,
      className,
      required,
      valid,
      invalid,
      readOnly,
      disabled,
      ...rest
    },
    ref,
  ) => {
    return (
      <textarea
        ref={ref}
        readOnly={readOnly}
        aria-readonly={readOnly}
        disabled={disabled}
        aria-disabled={disabled}
        aria-label={ariaLabel}
        aria-invalid={invalid}
        required={required}
        aria-required={required}
        aria-describedby={ariaDescribedby}
        className={cn(
          'relative block w-full rounded border-slate-300 text-sm outline-none',
          'focus:shadow-none focus:outline-none focus:ring-0',
          'transition-all',
          {
            'border-green-400 focus:border-green-400': valid,
            'border-red-400 focus:border-red-400': !valid && invalid,
          },
        )}
        {...rest}
      />
    )
  },
)

Textarea.displayName = 'Textarea'

export default Textarea
