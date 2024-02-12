import { useInput } from '@/lib/hooks/use-input'
import { cn } from '@/lib/utils'
import { ProfessionSchema } from '@/lib/validations'
import { useFormStateContext } from './form-context'
import Input from './input'

export default function Profession() {
  const {
    state: { status },
  } = useFormStateContext()
  const { inputProps, errors, hasErrors, isSuccess } = useInput({
    baseValue: '',
    type: 'text',
    schema: ProfessionSchema,
    placeholder: 'Escribe aquí tu profesión',
    reset: status === 'success',
  })

  return (
    <div className='block w-full'>
      <label htmlFor='profession' className='mb-2 block text-sm'>
        Profesión *
      </label>
      <Input
        id='profession'
        name='profession'
        {...inputProps}
        invalid={hasErrors}
        valid={isSuccess}
      />
      <p
        className='mt-1 min-h-[16px] text-xs text-red-500'
        id='profession-error'
      >
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
