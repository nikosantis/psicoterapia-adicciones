import { Element } from 'react-scroll'
import { FormProvider } from '../lib/context-form'
import Form from './form'

export default function Contact() {
  return (
    <Element name='contact'>
      <section className='contact' id='contacto'>
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
                Profesional o Licenciado en el Área de Salud (Médicos, Psiquiatras,
                Psicólogos/as Trabajadores Sociales)
              </p>
              <p>Postulaciones Noviembre 2021</p>

              <p className='p-title'>
                <b>Duración del Diplomado:</b>
              </p>
              <p>180 horas</p>

              <p className='p-title'>
                <b>Horario de Clases:</b>
              </p>
              <p>Por definir</p>

              <p className='p-title'>
                <b>Inicio de Clases:</b>
              </p>
              <p>Por definir</p>

              <p className='p-title'>
                <b>Término de Clases:</b>
              </p>
              <p>Por definir</p>
            </div>

            <div className='col-lg-6'>
              <FormProvider>
                <Form />
              </FormProvider>
            </div>

            <div className='col-lg-12 text-center'>
              <div className='legal'>
                <p>
                  <em>
                    **La Universidad de Santiago de Chile se reserva el derecho a dictar o
                    no el programa si no existe el mínimo de participantes requeridos.
                  </em>
                </p>
              </div>
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

            .legal {
              padding-top: 45px;
              p {
                font-size: 0.785rem;
              }
            }
          `}
        </style>
      </section>
    </Element>
  )
}
