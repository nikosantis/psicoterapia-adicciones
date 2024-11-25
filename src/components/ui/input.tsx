'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const inputVariant = cva(
  'block w-full rounded border-slate-300 text-sm outline-none transition-all focus:shadow-none focus:outline-none focus:ring-0',
  {
    variants: {
      invalid: {
        false: 'border-green-400 focus:border-green-400',
        true: 'border-red-400 focus:border-red-400',
      },
    },
  },
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariant> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid, ...props }, ref) => {
    return (
      <input
        className={cn(
          inputVariant({
            invalid: invalid,
          }),
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

Input.displayName = 'Input'

export { Input }
