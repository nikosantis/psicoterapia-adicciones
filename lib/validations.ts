import { email, minLength, object, optional, regex, string } from 'valibot'

const REQUIRED = 'Este campo es requerido'
const PHONE_REGEX = /(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}/i
const EMAIL_VALID = 'Debe ser un correo electrónico válido'
const PHONE_VALID = 'Debe ser un número de teléfono válido'

export const NameSchema = string(REQUIRED, [minLength(1, REQUIRED)])

export const ProfessionSchema = string(REQUIRED, [minLength(1, REQUIRED)])

export const EmailSchema = string(REQUIRED, [
  minLength(1, REQUIRED),
  email(EMAIL_VALID),
])

export const PhoneSchema = string(REQUIRED, [
  minLength(1, REQUIRED),
  regex(PHONE_REGEX, PHONE_VALID),
])

export const MessageSchema = optional(string())

export const FormSchema = object({
  name: NameSchema,
  email: EmailSchema,
  phone: PhoneSchema,
  profession: ProfessionSchema,
  comments: MessageSchema,
})
