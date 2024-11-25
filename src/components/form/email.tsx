'use client'

import { useId } from 'react'
import { useFormContext } from 'react-hook-form'

import { type FormValues } from '@/lib/validations'
import { FormMessage } from '@/components/ui/form-message'
import { Input, type InputProps } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Required } from '@/components/ui/required'

export default function Email() {
  const id = useId()
  const {
    register,
    formState: {
      errors,
      dirtyFields: { email: isDirty },
    },
  } = useFormContext<FormValues>()
  const inputVariant: InputProps['invalid'] = errors?.email
    ? true
    : isDirty
      ? false
      : undefined

  return (
    <div className='block w-full'>
      <Label htmlFor={`email-${id}`} id={`label-${id}`} className='mb-2'>
        Correo electrónico <Required />
      </Label>
      <Input
        type='email'
        id={`email-${id}`}
        invalid={inputVariant}
        autoComplete='off'
        aria-labelledby={`label-${id}`}
        aria-invalid={!!errors?.email}
        placeholder='Escribe aquí tu correo electrónico'
        {...register('email')}
      />
      <FormMessage id={`email-${id}-error`} aria-labelledby={`label-${id}`}>
        {errors?.email?.message}
      </FormMessage>
    </div>
  )
}
