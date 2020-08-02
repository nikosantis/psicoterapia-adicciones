import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {
  const { body, method } = req

  if (method === 'POST') {
    try {
      await sendgrid.send({
        to: 'nikosantis@gmail.com',
        // cc: 'tamara.silva@usach.cl',
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
      res.status(200).json({ message: 'Mensaje enviado. Pronto nos contactaremos con usted.' })
    } catch (error) {
      return res.status(error.statusCode || 500)
        .json({ error: 'Error al enviar el mensaje' })
    }
  }
}
