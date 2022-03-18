import { Element } from 'react-scroll'
import ModulesItem from './modules-item'

export default function Modules() {
  return (
    <Element name='modules'>
      <section className='modules' id='modulos'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7 text-center modules-title'>
              <h2 className='title'>Módulos y Objetivos</h2>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-6'>
              <ModulesItem title='1. Drogas en el Mundo'>
                <ul className='modules-list'>
                  <li>Estadística Mundial de abuso de Drogas</li>
                </ul>
              </ModulesItem>
              <ModulesItem title='2. Función y estructura de las principales áreas de la adicción.'>
                <ul className='modules-list'>
                  <li>
                    Comprender e identificar las principales áreas y circuitos
                    involucrados en la adicción.
                  </li>
                </ul>
              </ModulesItem>
              <ModulesItem title='3. Dinámica vincular temprana en los procesos adictivos: Trauma y desorganización.'>
                <ul className='modules-list'>
                  <li>
                    Conocer y comprender la dinámica del vínculo temprano tendiente a caer
                    en experiencias adictivas.
                  </li>
                </ul>
              </ModulesItem>
              <ModulesItem title='4. La adolescencia como dinámica evolutiva.'>
                <ul className='modules-list'>
                  <li>
                    Conocer los factores psicobiológicos y vinculares tendientes al inicio
                    del consumo.
                  </li>
                  <li>
                    Características del ensayo de diferenciación o indiferenciación.
                  </li>
                </ul>
              </ModulesItem>
              <ModulesItem title='5. Clínica y Apoyo farmacológico del Paciente.' />
            </div>
            <div className='col-lg-6'>
              <ModulesItem title='6. Modelo del desarrollo de la identidad desde una perspectiva Constructivista.'>
                <ul className='modules-list'>
                  <li>El modelo y epistemología constructivista.</li>
                  <li>La experiencia de la adicción desde el modelo constructivista.</li>
                  <li>Organización de sentido y significado.</li>
                  <li>
                    El Efecto Interpretado como recurso homeostático en el proceso
                    adictivo.
                  </li>
                </ul>
              </ModulesItem>
              <ModulesItem title='7. Neuroplasticidad.'>
                <ul className='modules-list'>
                  <li>
                    Actividades dirigidas a generar nuevas conexiones desde la Neocorteza
                    (Lóbulo Frontal)
                  </li>
                </ul>
              </ModulesItem>
              <ModulesItem title='8. Estrategias psicoterapéuticas desde el modelo Constructivista  y complejidad.'>
                <ul className='modules-list'>
                  <li>
                    Huella somático y límites homeostáticos/alostáticos en la dinámica
                    vincular.
                  </li>
                  <li>Coherencia narrativa y mentalización en el proceso de adicción.</li>
                  <li>La formulación del caso.</li>
                  <li>Proceso de contextualización del síntoma.</li>
                  <li>Psicopatología y síntoma.</li>
                  <li>El abordaje psicoterapéutico del paciente.</li>
                  <li>Proceso de reconsolidación de la memoria.</li>
                  <li>Estrategias vinculares con el paciente.</li>
                </ul>
              </ModulesItem>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .modules {
              padding: 120px 0;
              background-color: #f8f9fa;
            }

            .modules-title {
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

            .modules-list {
              padding-left: 25px;
            }
            .modules-list li {
              font-size: 0.875rem;
            }

            .btn-usach {
              color: #fff;
              background-color: var(--casper-orange);
              border-color: var(--casper-orange);
              transition: all 0.2s ease;
            }
            .btn-usach:hover {
              background-color: var(--casper-orange-hover);
              border-color: var(--casper-orange-hover);
            }

            .btn-usach:disabled {
              color: #fff;
              opacity: 0.5;
              cursor: not-allowed;
            }
          `}
        </style>
      </section>
    </Element>
  )
}
