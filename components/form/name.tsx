import { useInput } from '@/lib/hooks/use-input'
import { cn } from '@/lib/utils'
import { NameSchema } from '@/lib/validations'
import { useFormStateContext } from './form-context'
import Input from './input'

export default function Name() {
  const {
    state: { status },
  } = useFormStateContext()
  const { inputProps, errors, hasErrors, isSuccess } = useInput({
    baseValue: '',
    type: 'text',
    schema: NameSchema,
    placeholder: 'Escribe aquí tu nombre y apellido',
    reset: status === 'success',
  })

  return (
    <div className='block w-full'>
      <label htmlFor='name' className='mb-2 block text-sm'>
        Nombre y apellido *
      </label>
      <Input
        id='name'
        name='name'
        {...inputProps}
        invalid={hasErrors}
        valid={isSuccess}
      />
      <p className='mt-1 min-h-[16px] text-xs text-red-500' id='name-error'>
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
