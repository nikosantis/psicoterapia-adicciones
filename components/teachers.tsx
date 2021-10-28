import { Element } from 'react-scroll'
import Image from 'next/image'

import teacherImg1 from 'public/images/humberto-guajardo.png'
import teacherImg2 from 'public/images/diana-kushner.png'
import teacherImg3 from 'public/images/felipe-lecannelier.png'
import teacherImg4 from 'public/images/alberto-botto.jpg'
import teacherImg5 from 'public/images/constanza-espinoza.jpg'
import teacherImg6 from 'public/images/victor-ojeda-pacheco.jpg'

export default function Teachers() {
  return (
    <Element name='docentes'>
      <section className='teachers'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-12'>
              <div className='teacher-box'>
                <div className='teacher-image'>
                  <Image
                    src={teacherImg1}
                    alt='Prof. Dr. Humberto Guajardo Sáinz'
                    className='rounded-circle img-fluid'
                    placeholder='blur'
                  />
                </div>

                <div className='teacher-content'>
                  <div className='name'>
                    <h4>Prof. Dr. Humberto Guajardo Sáinz</h4>
                  </div>
                  <div className='sub'>
                    <p>
                      <b>Director</b>
                    </p>
                    <p>
                      Médico Psiquiatra. Director de Postgrado de la Facultad de Ciencias
                      Médicas de la Universidad de Santiago.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-12'>
              <div className='teacher-box'>
                <div className='teacher-image'>
                  <Image
                    src={teacherImg2}
                    alt='Sra. Diana Kushner Lanis'
                    className='rounded-circle img-fluid'
                    placeholder='blur'
                  />
                </div>

                <div className='teacher-content'>
                  <div className='name'>
                    <h4>Sra. Diana Kushner Lanis</h4>
                  </div>
                  <div className='sub'>
                    <p>
                      Magister en Psicoterapia Cognitiva Posracionalista, USACH,
                      Antropólga social, Profesora en Prevención y Rehabilitación de
                      Drogas de la Facultad de Ciencias Médicas de la Universidad de
                      Santiago.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-12'>
              <div className='teacher-box'>
                <div className='teacher-image'>
                  <Image
                    src={teacherImg3}
                    alt='Sr. Felipe Lecannelier Acevedo'
                    className='rounded-circle img-fluid'
                    placeholder='blur'
                  />
                </div>

                <div className='teacher-content'>
                  <div className='name'>
                    <h4>Sr. Felipe Lecannelier Acevedo</h4>
                  </div>
                  <div className='sub'>
                    <p>Dr. en Psicología Universidad Autónoma de Madrid - España</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-12'>
              <div className='teacher-box'>
                <div className='teacher-image'>
                  <Image
                    src={teacherImg4}
                    alt='Prof. Alberto Botto'
                    className='rounded-circle img-fluid'
                    placeholder='blur'
                  />
                </div>

                <div className='teacher-content'>
                  <div className='name'>
                    <h4>Prof. Alberto Botto Valle</h4>
                  </div>
                  <div className='sub'>
                    <p>
                      Médico Psiquiatra. Doctor en Psicoterapia. Prof. Asistente
                      Departamento de Psiquiatría Oriente Universidad de Chile.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-12'>
              <div className='teacher-box'>
                <div className='teacher-image'>
                  <Image
                    src={teacherImg5}
                    alt='Ps. Mag. Constanza Espinoza'
                    className='rounded-circle img-fluid'
                    placeholder='blur'
                  />
                </div>

                <div className='teacher-content'>
                  <div className='name'>
                    <h4>Sra. Constanza Espinoza Garrido</h4>
                  </div>
                  <div className='sub'>
                    <p>
                      Magister en Psicoterapia Cognitiva Posracionalista, USACH, Profesora
                      en Prevención y Rehabilitación de Drogas de la Facultad de Ciencias
                      Médicas de la Universidad de Santiago.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-12'>
              <div className='teacher-box'>
                <div className='teacher-image'>
                  <Image
                    src={teacherImg6}
                    alt='Ps. Víctor Andrés Ojeda Pacheco'
                    className='rounded-circle img-fluid'
                    placeholder='blur'
                  />
                </div>

                <div className='teacher-content'>
                  <div className='name'>
                    <h4>Ps. Víctor Andrés Ojeda Pacheco</h4>
                  </div>
                  <div className='sub'>
                    <p>
                      Magister en Ciencias Biológicas con mención en Neurociencias de la
                      Universidad de Valparaíso.
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
              background-color: #ffffff;
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
            }
            @media (min-width: 992px) {
              p {
                font-size: 1.2rem;
              }
            }

            .teacher-box {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              padding: 0 30px;
              margin-bottom: 60px;
            }

            .teacher-image {
              display: flex;
              justify-content: center;
              margin-bottom: 25px;
              width: 200px;
              height: 200px;
            }

            .teacher-content {
              display: flex;
              justify-content: center;
              flex-direction: column;
              text-align: center;
            }

            .name h4 {
              font-size: 1.125rem;
            }

            .sub p {
              font-size: 1rem;
              margin-bottom: 5px;
            }
          `}
        </style>
      </section>
    </Element>
  )
}
