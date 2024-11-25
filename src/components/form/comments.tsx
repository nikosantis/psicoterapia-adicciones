import { useId } from 'react'
import { useFormContext } from 'react-hook-form'

import { type FormValues } from '@/lib/validations'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function Comments() {
  const id = useId()
  const { register } = useFormContext<FormValues>()

  return (
    <div className='block w-full'>
      <Label htmlFor={`comments-${id}`} id={`label-${id}`} className='mb-2'>
        Comentario
      </Label>
      <Textarea
        id={`comments-${id}`}
        placeholder='Puedes escribir aquí algún comentario'
        autoComplete='off'
        aria-labelledby={`label-${id}`}
        {...register('comments')}
      />
    </div>
  )
}
