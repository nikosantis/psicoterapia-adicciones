import {
  forwardRef,
  RefAttributes,
  TextareaHTMLAttributes as ReactTextareaHTMLAttributes
} from 'react'
import cx from 'clsx'

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
    ref
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
        className={cx(
          'relative rounded w-full text-sm block border-slate-300 outline-none',
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

Textarea.displayName = 'Textarea'

export default Textarea
