'use client'

import { useId } from 'react'
import { useFormContext } from 'react-hook-form'

import { type FormValues } from '@/lib/validations'
import { FormMessage } from '@/components/ui/form-message'
import { Input, type InputProps } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Required } from '@/components/ui/required'

export default function Name() {
  const id = useId()
  const {
    register,
    formState: {
      errors,
      dirtyFields: { name: isDirty },
    },
  } = useFormContext<FormValues>()
  const inputVariant: InputProps['invalid'] = errors?.name
    ? true
    : isDirty
      ? false
      : undefined

  return (
    <div className='block w-full'>
      <Label htmlFor={`name-${id}`} id={`label-${id}`} className='mb-2'>
        Nombre y apellido
        <Required />
      </Label>
      <Input
        id={`name-${id}`}
        invalid={inputVariant}
        autoComplete='off'
        aria-labelledby={`label-${id}`}
        aria-invalid={!!errors?.name}
        placeholder='Escribe aquí tu nombre y apellido'
        {...register('name')}
      />
      <FormMessage id={`name-${id}-error`} aria-labelledby={`label-${id}`}>
        {errors?.name?.message}
      </FormMessage>
    </div>
  )
}
