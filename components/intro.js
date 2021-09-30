import { Element } from 'react-scroll'
import IntroContent from './intro-content'

export default function Intro() {
  return (
    <Element name='intro'>
      <section className='intro' id='diplomado'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7 text-center intro-title'>
              <h5 className='pre-title'>Diplomado Clínico Internacional</h5>
              <h2 className='title'>
                Psicoterapia para el Tratamiento de abuso de alcohol y drogas
              </h2>
            </div>
            <div className='col-lg-8 text-center'>
              <p>
                El Diplomado tiene como objetivo comprender la dinámica sintomática
                compleja involucrada en el proceso de adicción, bajo el concepto de
                diferenciación e individualidad de la persona, utilizando las redes de
                acompañamiento y protección del paciente, aún en ausencia de estas.
              </p>
              <p>
                Integrar cómo los procesos psicobiológicos, vinculares y ontogénicos
                (desarrollo vital) están a la base como probables detonantes de los
                procesos de adicción.
              </p>
              <p>
                Manejar una epistemología y una metodología basadas en la subjetividad del
                ser humano. Modelo clínico propuesto por la Unidad de Adicciones de la
                Facultad de Ciencias Médicas Usach.
              </p>
            </div>
          </div>

          <IntroContent />
        </div>
        <style jsx>
          {`
            .intro {
              padding: 120px 0;
            }

            .intro-title {
              margin-bottom: 50px;
            }

            .pre-title {
              color: #3e3b3b;
              font-weight: 300;
              text-transform: uppercase;
              font-size: 1rem;
            }

            .title {
              color: var(--casper-blue);
              font-size: 2rem;
            }

            @media (min-width: 992px) {
              .pre-title {
                font-size: 1.2rem;
              }
              .title {
                color: var(--casper-blue);
                font-size: 2.5rem;
              }
            }
          `}
        </style>
      </section>
    </Element>
  )
}
