import prisma from '@/lib/prisma'

const API_KEY = process.env.SENDINBLUE_API_KEY
const SENDINBLUE_URL = 'https://api.sendinblue.com/v3/smtp/email'
const RECAPTCHA_URL = 'https://www.google.com/recaptcha/api/siteverify'
const RECAPTCHA_SITE_SECRET = process.env.RECAPTCHA_SITE_SECRET
const MAIL_TO = 'melissa.diaz@usach.cl'
const MAIL_CC = 'claudia.miranda.z@usach.cl'
// const MAIL_TO = 'nikosantis@gmail.com'

type BodyType = {
  name: string
  profession: string
  email: string
  phone: string
  comments?: string
  token: string
}

export async function POST(request: Request) {
  const res = await request.json()
  const body = res as BodyType

  try {
    const reCaptchaRes = await fetch(
      `${RECAPTCHA_URL}?secret=${RECAPTCHA_SITE_SECRET}&response=${body.token}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    )
    const reCaptchaJson = await reCaptchaRes.json()
    if (reCaptchaJson && reCaptchaJson.success && reCaptchaJson.score >= 0.5) {
      // await prisma.contact.create({
      //   data: {
      //     name: body.name,
      //     email: body.email,
      //     phone: body.phone,
      //     profession: body.profession,
      //     comment: body.comments,
      //   },
      // })

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
          formName: body.name,
          formEmail: body.email,
          formPhone: body.phone,
          formProfession: body.profession,
          formComment: body.comments,
        },
      }

      const emailResult = await fetch(SENDINBLUE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': API_KEY,
        },
        body: JSON.stringify(emailBody),
      })
      const emailJson = await emailResult.json()
      if (emailResult.ok && emailJson.messageId) {
        return Response.json(
          {
            message: 'Message sent',
          },
          { status: 200 },
        )
      } else {
        return Response.json(
          { message: 'Error sending the message' },
          { status: 400 },
        )
      }
    }

    return Response.json({ message: 'Invalid recaptcha' }, { status: 400 })
  } catch (err) {
    const error = err as Error
    console.error(error)
    return Response.json(
      { message: 'Error sending the message' },
      { status: 500 },
    )
  }
}
