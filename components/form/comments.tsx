import { commentsSchema } from 'lib/schemas/contact-form-schema'
import { useInput } from 'lib/hooks/use-input'
import Textarea from './textarea'
import { useFormContext } from './form-submit'

export default function Comments() {
  const { isSuccess: isFormSuccess } = useFormContext()
  const { inputProps } = useInput({
    baseValue: '',
    type: 'textarea',
    schema: commentsSchema,
    placeholder: 'Escribe aquí tu apellido',
    reset: isFormSuccess
  })

  return (
    <div className='w-full block'>
      <label htmlFor='comments' className='text-sm block mb-2'>
        Comentario
      </label>
      <Textarea id='comments' name='comments' {...inputProps} />
    </div>
  )
}
