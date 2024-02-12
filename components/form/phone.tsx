import { useInput } from '@/lib/hooks/use-input'
import { cn } from '@/lib/utils'
import { PhoneSchema } from '@/lib/validations'
import { useFormStateContext } from './form-context'
import Input from './input'

export default function Phone() {
  const {
    state: { status },
  } = useFormStateContext()
  const { inputProps, errors, hasErrors, isSuccess } = useInput({
    baseValue: '',
    type: 'text',
    schema: PhoneSchema,
    placeholder: 'Escribe aquí tu teléfono',
    reset: status === 'success',
  })

  return (
    <div className='block w-full'>
      <label htmlFor='phone' className='mb-2 block text-sm'>
        Teléfono *
      </label>
      <Input
        id='phone'
        name='phone'
        {...inputProps}
        invalid={hasErrors}
        valid={isSuccess}
      />
      <p className='mt-1 min-h-[16px] text-xs text-red-500' id='phone-error'>
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
