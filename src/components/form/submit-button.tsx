import { Loader2Icon } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import { cn } from '@/lib/utils'
import { FormValues } from '@/lib/validations'

export default function SubmitButton() {
  const {
    formState: { isSubmitting },
  } = useFormContext<FormValues>()
  return (
    <button
      type='submit'
      disabled={isSubmitting}
      className={cn(
        'select-none rounded bg-u-orange-primary-500 px-3 py-2 text-center font-medium text-white transition-all hover:bg-u-orange-primary-700',
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:select-none disabled:bg-u-orange-primary-500/40',
        'inline-flex',
      )}
    >
      {isSubmitting ? (
        <>
          <Loader2Icon className='mr-2 size-4 animate-spin' />
          <span>Enviando...</span>
        </>
      ) : (
        <span>Enviar</span>
      )}
    </button>
  )
}
