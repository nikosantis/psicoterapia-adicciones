import { forwardRef, InputHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

const Required = forwardRef<HTMLElement, InputHTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <abbr
        aria-label='required'
        className={cn('ml-1 text-red-500', className)}
        ref={ref}
        title='Este campo es obligatorio'
        {...props}
      >
        *
      </abbr>
    )
  },
)
Required.displayName = 'Required'

export { Required }
