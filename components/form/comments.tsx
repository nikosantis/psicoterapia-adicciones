import { useInput } from '@/lib/hooks/use-input'
import { MessageSchema } from '@/lib/validations'
import { useFormStateContext } from './form-context'
import Textarea from './textarea'

export default function Comments() {
  const {
    state: { status },
  } = useFormStateContext()
  const { inputProps } = useInput({
    baseValue: '',
    type: 'textarea',
    schema: MessageSchema,
    placeholder: 'Puedes escribir aquí algún comentario',
    reset: status === 'success',
  })

  return (
    <div className='block w-full'>
      <label htmlFor='comments' className='mb-2 block text-sm'>
        Comentario
      </label>
      <Textarea id='comments' name='comments' {...inputProps} />
    </div>
  )
}
