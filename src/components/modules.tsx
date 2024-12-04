'use client'

import { useScroll } from '@/lib/contexts/scroll'

export default function Modules() {
  const { modulesRef } = useScroll()

  return (
    <section
      className='relative scroll-mt-12 bg-zinc-100 py-24'
      ref={modulesRef}
      id='modulos'
    >
      <div className='w-ful z-20 mx-auto mb-16 flex max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8 xl:flex-row xl:flex-wrap'>
        <div className='mb-12 w-full'>
          <h2 className='text-center text-4xl font-medium'>
            Módulos y Objetivos
          </h2>
        </div>
        <div className='w-full xl:w-1/2'>
          <div className='mb-6'>
            <h4 className='mb-2 font-bold'>1. Drogas en el Mundo</h4>
            <ul className='list-disc pl-7'>
              <li>Estadística Mundial de abuso de Drogas</li>
            </ul>
          </div>

          <div className='mb-6'>
            <h4 className='mb-2 font-bold'>
              2. Función y estructura de las principales áreas de la adicción.
            </h4>
            <ul className='list-disc pl-7'>
              <li>
                Comprender e identificar las principales áreas y circuitos
                involucrados en la adicción.
              </li>
            </ul>
          </div>

          <div className='mb-6'>
            <h4 className='mb-2 font-bold'>
              3. Dinámica vincular temprana en los procesos adictivos: Trauma y
              desorganización.
            </h4>
            <ul className='list-disc pl-7'>
              <li>
                Conocer y comprender la dinámica del vínculo temprano tendiente
                a caer en experiencias adictivas.
              </li>
            </ul>
          </div>

          <div className='mb-6'>
            <h4 className='mb-2 font-bold'>
              4. La adolescencia como dinámica evolutiva.
            </h4>
            <ul className='list-disc pl-7'>
              <li>
                Conocer los factores psicobiológicos y vinculares tendientes al
                inicio del consumo.
              </li>
              <li>
                Características del ensayo de diferenciación o indiferenciación.
              </li>
            </ul>
          </div>

          <div className=''>
            <h4 className='font-bold'>
              5. Clínica y Apoyo farmacológico del Paciente
            </h4>
          </div>
        </div>

        <div className='w-full xl:w-1/2'>
          <div className='mb-6'>
            <h4 className='mb-2 font-bold'>
              6. Modelo del desarrollo de la identidad desde una perspectiva
              Constructivista.
            </h4>
            <ul className='list-disc pl-7'>
              <li>El modelo y epistemología constructivista.</li>
              <li>
                La experiencia de la adicción desde el modelo constructivista.
              </li>
              <li>Organización de sentido y significado.</li>
              <li>
                El Efecto Interpretado como recurso homeostático en el proceso
                adictivo.
              </li>
            </ul>
          </div>

          <div className='mb-6'>
            <h4 className='mb-2 font-bold'>7. Neuroplasticidad.</h4>
            <ul className='list-disc pl-7'>
              <li>
                Actividades dirigidas a generar nuevas conexiones desde la
                Neocorteza (Lóbulo Frontal)
              </li>
            </ul>
          </div>

          <div>
            <h4 className='mb-2 font-bold'>
              8. Estrategias psicoterapéuticas desde el modelo Constructivista y
              complejidad.
            </h4>
            <ul className='list-disc pl-7'>
              <li>
                Huella somático y límites homeostáticos/alostáticos en la
                dinámica vincular.
              </li>
              <li>
                Coherencia narrativa y mentalización en el proceso de adicción.
              </li>
              <li>La formulación del caso.</li>
              <li>Proceso de contextualización del síntoma.</li>
              <li>Psicopatología y síntoma.</li>
              <li>El abordaje psicoterapéutico del paciente.</li>
              <li>Proceso de reconsolidación de la memoria.</li>
              <li>Estrategias vinculares con el paciente.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
