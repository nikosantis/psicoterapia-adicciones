import { z } from 'zod'

const REQUIRED = 'Este campo es requerido'
const PHONE_REGEX = /(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}/i
const EMAIL_VALID = 'Debe ser un correo electrónico válido'
const PHONE_VALID = 'Debe ser un número de teléfono válido'

export const nameSchema = z
  .string({
    message: REQUIRED,
  })
  .min(1, REQUIRED)

export const professionSchema = z
  .string({
    message: REQUIRED,
  })
  .min(1, REQUIRED)

export const emailSchema = z
  .string({
    required_error: REQUIRED,
    invalid_type_error: REQUIRED,
  })
  .email({
    message: EMAIL_VALID,
  })

export const phoneSchema = z
  .string({
    required_error: REQUIRED,
    invalid_type_error: REQUIRED,
  })
  .regex(PHONE_REGEX, {
    message: PHONE_VALID,
  })

export const MessageSchema = z.string().optional()

export const formSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  profession: professionSchema,
  comments: MessageSchema,
})

export type FormValues = z.output<typeof formSchema>

export const sendEmailActionSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  profession: professionSchema,
  comments: MessageSchema,
  token: z.string(),
})
