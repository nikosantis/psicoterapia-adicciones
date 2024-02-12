import { useInput } from '@/lib/hooks/use-input'
import { cn } from '@/lib/utils'
import { EmailSchema } from '@/lib/validations'
import { useFormStateContext } from './form-context'
import Input from './input'

export default function Email() {
  const {
    state: { status },
  } = useFormStateContext()
  const { inputProps, errors, hasErrors, isSuccess } = useInput({
    baseValue: '',
    type: 'email',
    schema: EmailSchema,
    placeholder: 'Escribe aquí tu correo electrónico',
    reset: status === 'success',
  })

  return (
    <div className='block w-full'>
      <label htmlFor='email' className='mb-2 block text-sm'>
        Correo electrónico *
      </label>
      <Input
        id='email'
        name='email'
        {...inputProps}
        invalid={hasErrors}
        valid={isSuccess}
      />
      <p className='mt-1 min-h-[16px] text-xs text-red-500' id='email-error'>
        <span
          className={cn(
            'transition-all',
            hasErrors ? 'opacity-100' : 'opacity-0',
          )}
        >
          {errors?.map((x) => <span key={x}> {x}.</span>)}
        </span>
      </p>
    </div>
  )
}
