import type { NextApiRequest, NextApiResponse } from 'next'
import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '')

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { body, method } = req

  if (method === 'POST') {
    try {
      const resEmail = await sendgrid.send({
        to: 'melissa.diaz@usach.cl',
        cc: 'tamara.silva@usach.cl',
        from: 'contacto@diplomadopsicoterapia.cl',
        subject: 'Contacto Landing Diplomado',
        text: 'Hello',
        html: `
          <div>
            <p><b>Formulario Diplomado Psicoterapia 2020</b></p>
            <p><b>Nombre y Apellido: </b>${body.name}</p>
            <p><b>Profesión: </b>${body.profession}</p>
            <p><b>Correo Electrónico: </b>${body.email}</p>
            <p><b>Celular: </b>${body.phone}</p>
            <p><b>Comentario: </b>${body.comment}</p>
            <p>Mensaje enviado desde el landing <a href='https://diplomadopsicoterapia.cl/'>https://diplomadopsicoterapia.cl/</a></p>
          </div>
        `
      })
      if (resEmail[0]) {
        return res
          .status(200)
          .json({ message: 'Mensaje enviado. Pronto nos contactaremos con usted.' })
      } else {
        return res.status(400).json({ error: 'Error al enviar el mensaje' })
      }
    } catch (error) {
      return res.status(500).json({ error: 'Error al enviar el mensaje' })
    }
  }
}
