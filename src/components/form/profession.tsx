'use client'

import { useId } from 'react'
import { useFormContext } from 'react-hook-form'

import { type FormValues } from '@/lib/validations'
import { FormMessage } from '@/components/ui/form-message'
import { Input, type InputProps } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Required } from '@/components/ui/required'

export default function Profession() {
  const id = useId()
  const {
    register,
    formState: {
      errors,
      dirtyFields: { profession: isDirty },
    },
  } = useFormContext<FormValues>()
  const inputVariant: InputProps['invalid'] = errors?.profession
    ? true
    : isDirty
      ? false
      : undefined

  return (
    <div className='block w-full'>
      <Label htmlFor={`profession-${id}`} id={`label-${id}`} className='mb-2'>
        Profesión <Required />
      </Label>
      <Input
        id={`profession-${id}`}
        invalid={inputVariant}
        autoComplete='off'
        aria-labelledby={`label-${id}`}
        aria-invalid={!!errors?.profession}
        placeholder='Escribe aquí tu profesión'
        {...register('profession')}
      />
      <FormMessage
        id={`profession-${id}-error`}
        aria-labelledby={`label-${id}`}
      >
        {errors?.profession?.message}
      </FormMessage>
    </div>
  )
}
