import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from 'lib/prisma'

const API_KEY = process.env.SENDINBLUE_API_KEY
const SENDINBLUE_URL = 'https://api.sendinblue.com/v3/smtp/email'
const RECAPTCHA_URL = 'https://www.google.com/recaptcha/api/siteverify'
const RECAPTCHA_SITE_SECRET = process.env.RECAPTCHA_SITE_SECRET
const MAIL_TO = 'melissa.diaz@usach.cl'

type BodyType = {
  name: string
  profession: string
  email: string
  phone: string
  comments?: string
  token: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  const body = req.body as BodyType

  try {
    const reCaptchaRes = await fetch(
      `${RECAPTCHA_URL}?secret=${RECAPTCHA_SITE_SECRET}&response=${body.token}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )
    const reCaptchaJson = await reCaptchaRes.json()
    if (reCaptchaJson && reCaptchaJson.success && reCaptchaJson.score >= 0.5) {
      const checkIfExist = await prisma.contact.findFirst({
        where: {
          email: body.email
        }
      })
      if (checkIfExist) {
        return res.status(400).json({
          message: 'Email exist'
        })
      }

      await prisma.contact.create({
        data: {
          name: body.name,
          email: body.email,
          phone: body.phone,
          profession: body.profession,
          comment: body.comments
        }
      })

      const emailBody = {
        to: [
          {
            email: MAIL_TO
          }
        ],
        templateId: 2,
        params: {
          formName: body.name,
          formEmail: body.email,
          formPhone: body.phone,
          formProfession: body.profession,
          formComment: body.comments
        }
      }

      const emailResult = await fetch(SENDINBLUE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': API_KEY
        },
        body: JSON.stringify(emailBody)
      })
      const emailJson = await emailResult.json()
      if (emailResult.ok && emailJson.messageId) {
        return res.status(200).json({
          message: 'Message sent'
        })
      } else {
        return res.status(400).json({
          message: 'Error sending the message'
        })
      }
    }
    return res.status(400).json({
      message: 'Invalid recaptcha'
    })
  } catch (err) {
    const error = err as Error
    console.error(error)
    return res.status(500).json({ message: 'Error sending the message' })
  }
}
