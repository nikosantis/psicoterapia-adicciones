import * as v from 'valibot'

const REQUIRED = 'Este campo es requerido'
const PHONE_REGEX = /(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}/i
const EMAIL_VALID = 'Debe ser un correo electrónico válido'
const PHONE_VALID = 'Debe ser un número de teléfono válido'

export const NameSchema = v.string(REQUIRED, [v.minLength(1, REQUIRED)])

export const ProfessionSchema = v.string(REQUIRED, [v.minLength(1, REQUIRED)])

export const EmailSchema = v.string(REQUIRED, [
  v.minLength(1, REQUIRED),
  v.email(EMAIL_VALID),
])

export const PhoneSchema = v.string(REQUIRED, [
  v.minLength(1, REQUIRED),
  v.regex(PHONE_REGEX, PHONE_VALID),
])

export const MessageSchema = v.optional(v.string())

export const FormSchema = v.object({
  name: NameSchema,
  email: EmailSchema,
  phone: PhoneSchema,
  profession: ProfessionSchema,
  comments: MessageSchema,
})
