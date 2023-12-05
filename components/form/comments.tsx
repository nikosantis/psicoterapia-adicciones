import { useInput } from '@/lib/hooks/use-input'
import { cn } from '@/lib/utils'
import { MessageSchema } from '@/lib/validations'
import { useFormContext } from './form-submit'
import Textarea from './textarea'

export default function Comments() {
  const { isSuccess: isFormSuccess } = useFormContext()
  const { inputProps } = useInput({
    baseValue: '',
    type: 'textarea',
    schema: MessageSchema,
    placeholder: 'Puedes escribir aquí algún comentario',
    reset: isFormSuccess,
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
