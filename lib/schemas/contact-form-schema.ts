import { z } from 'zod'

const REQUIRED = 'Este campo es requerido'
const PHONE_REGEX = /(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}/g

export const nameSchema = z
  .string({
    required_error: REQUIRED,
    invalid_type_error: ' '
  })
  .min(1, REQUIRED)

export const professionSchema = z
  .string({
    required_error: REQUIRED,
    invalid_type_error: ' '
  })
  .min(1, REQUIRED)

export const emailSchema = z
  .string({
    required_error: REQUIRED,
    invalid_type_error: ' '
  })
  .min(1, REQUIRED)
  .email({ message: 'Debe ser un correo electrónico válido' })

export const phoneSchema = z
  .string({
    required_error: REQUIRED,
    invalid_type_error: ' '
  })
  .min(1, REQUIRED)
  .regex(PHONE_REGEX, 'Debe ser un número de teléfono válido')

export const commentsSchema = z.string().optional()

export const formSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  profession: professionSchema,
  comments: commentsSchema
})
