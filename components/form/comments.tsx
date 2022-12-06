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
    placeholder: 'Puedes escribir aquí algún comentario',
    reset: isFormSuccess
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
