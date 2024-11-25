'use client'

import { useId } from 'react'
import { useFormContext } from 'react-hook-form'

import { type FormValues } from '@/lib/validations'
import { FormMessage } from '@/components/ui/form-message'
import { Input, type InputProps } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Required } from '@/components/ui/required'

export default function Phone() {
  const id = useId()
  const {
    register,
    formState: {
      errors,
      dirtyFields: { phone: isDirty },
    },
  } = useFormContext<FormValues>()
  const inputVariant: InputProps['invalid'] = errors?.phone
    ? true
    : isDirty
      ? false
      : undefined

  return (
    <div className='block w-full'>
      <Label htmlFor={`phone-${id}`} id={`label-${id}`} className='mb-2'>
        Teléfono <Required />
      </Label>
      <Input
        type='tel'
        id={`phone-${id}`}
        invalid={inputVariant}
        autoComplete='off'
        aria-labelledby={`label-${id}`}
        aria-invalid={!!errors?.phone}
        placeholder='Escribe aquí tu teléfono'
        {...register('phone')}
      />
      <FormMessage id={`phone-${id}-error`} aria-labelledby={`label-${id}`}>
        {errors?.phone?.message}
      </FormMessage>
    </div>
  )
}
