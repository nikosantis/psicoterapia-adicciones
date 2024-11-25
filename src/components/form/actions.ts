'use server'

import { sendEmailActionSchema } from '@/lib/validations'

const API_KEY = process.env.SENDINBLUE_API_KEY
const SENDINBLUE_URL = 'https://api.sendinblue.com/v3/smtp/email'
const RECAPTCHA_URL = 'https://www.google.com/recaptcha/api/siteverify'
const RECAPTCHA_SITE_SECRET = process.env.RECAPTCHA_SITE_SECRET
const MAIL_TO = 'melissa.diaz@usach.cl'
const MAIL_CC = 'claudia.miranda.z@usach.cl'
// const MAIL_TO = 'nikosantis@gmail.com'

export async function sendEmailAction(formData: FormData) {
  try {
    const parse = sendEmailActionSchema.safeParse({
      name: formData.get('name') as string,
      profession: formData.get('profession') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      comments: formData.get('comments') as string,
      token: formData.get('token') as string,
    })
    if (!parse.success) {
      return {
        error: 'Invalid form data',
      }
    }
    const reCaptchaRes = await fetch(
      `${RECAPTCHA_URL}?secret=${RECAPTCHA_SITE_SECRET}&response=${parse.data.token}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        cache: 'no-cache',
      },
    )
    const reCaptchaJson = await reCaptchaRes.json()
    if (reCaptchaJson && reCaptchaJson.success && reCaptchaJson.score >= 0.5) {
      const emailBody = {
        to: [
          {
            email: MAIL_TO,
          },
        ],
        cc: [
          {
            email: MAIL_CC,
          },
        ],
        templateId: 2,
        params: {
          formName: parse.data.name,
          formEmail: parse.data.email,
          formPhone: parse.data.phone,
          formProfession: parse.data.profession,
          formComment: parse.data.comments,
        },
      }

      const emailResult = await fetch(SENDINBLUE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': API_KEY,
          cache: 'no-cache',
        },
        body: JSON.stringify(emailBody),
      })

      const emailJson = await emailResult.json()

      if (emailResult.ok && emailJson.messageId) {
        return {
          success: 'Message sent successfully',
        }
      } else {
        return {
          error: 'Error sending the message',
        }
      }
    }

    return {
      error: 'Error sending the message',
    }
  } catch (err) {
    const error = err as Error
    console.error(error)
    return {
      error: 'Error sending the message',
    }
  }
}
