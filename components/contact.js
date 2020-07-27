import { Element } from 'react-scroll'
import Form from './form'

export default function Contact () {
  return (
    <Element name='contact'>
      <section className='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2 className='title'>Contacto</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6 mb-5 mb-lg-0'>
              <p className='p-title'>
                <b>Requisitos:</b>
              </p>
              <p>
                Profesional o Licenciado en el Área de Salud (Médicos, Psiquiatras, Psicólogos/as Trabajadores Sociales)
              </p>

              <p className='p-title'>
                <b>Duración del Diplomado:</b>
              </p>
              <p>
                160 horas
              </p>

              <p className='p-title'>
                <b>Horario de Clases:</b>
              </p>
              <p>
                Martes y Viernes de 18:00 a 21:00 horas
              </p>

              <p className='p-title'>
                <b>Inicio de Clases:</b>
              </p>
              <p>
                22 de septiembre de 2020
              </p>

              <p className='p-title'>
                <b>Término de Clases:</b>
              </p>
              <p>
                22 de enero 2021
              </p>
            </div>

            <div className='col-lg-6'>
              <Form />
            </div>
          </div>
        </div>

        <style jsx>
          {`
          .contact {
            padding: 120px 0;
            background-color: #ffffff;
          }

          .title {
            color: var(--casper-blue);
            font-size: 2rem;
            margin-bottom: 45px;
          }

          .p-title {
            margin-bottom: 10px;
          }
        `}
        </style>
      </section>
    </Element>
  )
}
