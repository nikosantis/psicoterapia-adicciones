import { Element } from 'react-scroll'

export default function Teachers () {
  return (
    <Element name='docentes'>
      <section className='teachers'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-12'>
              <div className='teacher-box'>
                <div className='teacher-image'>
                  <img src='/images/humberto-guajardo.png' alt='' className='rounded-circle img-fluid' />
                </div>

                <div className='teacher-content'>
                  <div className='name'>
                    <h4>Prof. Dr. Humberto Guajardo Sáinz</h4>
                  </div>
                  <div className='sub'>
                    <p><b>Director</b></p>
                    <p>
                      Médico Psiquiatra. Director de Postgrado de la Facultad de Ciencias Médicas de la Universidad de Santiago.
                      Prof. Titular  de Psiquiatría Facultad de Ciencias Médicas USACH
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-12'>
              <div className='teacher-box'>
                <div className='teacher-image'>
                  <img src='/images/diana-kushner.png' alt='' className='rounded-circle img-fluid' />
                </div>

                <div className='teacher-content'>
                  <div className='name'>
                    <h4>Sra. Diana Kushner Lanis</h4>
                  </div>
                  <div className='sub'>
                    <p>
                      Magister en Psicoterapia Cognitiva Postracionalista, USACH,. Antropóloga social. Profesora en Prevención y Rehabilitación de Drogas de la Facultad de Ciencias Médicas de la Universidad de Santiago.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-12'>
              <div className='teacher-box'>
                <div className='teacher-image'>
                  <img src='/images/felipe-lecannelier.png' alt='' className='rounded-circle img-fluid' />
                </div>

                <div className='teacher-content'>
                  <div className='name'>
                    <h4>Sr. Felipe Lecannelier Acevedo</h4>
                  </div>
                  <div className='sub'>
                    <p>
                      Dr. en Psicología Universidad Autónoma de Madrid - España
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-12'>
              <div className='teacher-box'>
                <div className='teacher-image'>
                  <img src='/images/alberto-botto.jpg' alt='' className='rounded-circle img-fluid' />
                </div>

                <div className='teacher-content'>
                  <div className='name'>
                    <h4>Prof. Alberto Botto</h4>
                  </div>
                  <div className='sub'>
                    <p>
                      Profesor Invitado. Médico Psiquiatra. Doctor en Psicoterapia. Prof. Asistente Departamento de Psiquiatría Oriente Universidad de Chile
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-12'>
              <div className='teacher-box'>
                <div className='teacher-image'>
                  <img src='/images/constanza-espinoza.jpg' alt='' className='rounded-circle img-fluid' />
                </div>

                <div className='teacher-content'>
                  <div className='name'>
                    <h4>Ps. Mag. Constanza Espinoza</h4>
                  </div>
                  <div className='sub'>
                    <p>
                      Magister en Psicoterapia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>
          {`
          .teachers {
            padding: 120px 0;
            background-color: #f8f9fa;
          }

          .quote-left {
            margin-bottom: 25px;
            display: flex;
          }

          .quote-right {
            margin-top: 25px;
            display: flex;
            justify-content: flex-end;
          }

          p {
            text-align: center;

            @media (min-width: 992px) {
              font-size: 1.2rem;
            }
          }

          .teacher-box {
            display: flex;
            justify-content: center;
            flex-direction: column;
            padding: 0 30px;
            margin-bottom: 60px;
          }

          .teacher-image {
            display: flex;
            justify-content: center;
            margin-bottom: 25px;

            img {
              width: 200px;
              height: 200px;
            }
          }

          .teacher-content {
            display: flex;
            justify-content: center;
            flex-direction: column;
            text-align: center;
          }

          .name {
            h4 {
              font-size: 1.125rem;
            }
          }

          .sub {
            p {
              font-size: 1rem;
              margin-bottom: 5px;
            }
          }
        `}
        </style>
      </section>
    </Element>
  )
}
