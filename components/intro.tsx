'use client'

import { FiCalendar, FiClock, FiEdit } from 'react-icons/fi'
import { MdLaptopMac } from 'react-icons/md'
import IntroElement from '@/components/intro-element'
import { useScroll } from '@/lib/contexts/scroll'

export default function Intro() {
  const { aboutRef } = useScroll()
  return (
    <section className='relative bg-white py-24' ref={aboutRef}>
      <div className='z-20 mx-auto mb-16 flex w-full max-w-7xl justify-center px-4 sm:px-6 lg:px-8 xl:flex-row'>
        <div className='w-full xl:w-7/12'>
          <h5 className='relative mb-2 text-center text-xl font-light uppercase text-zinc-700'>
            Diplomado Clínico
          </h5>
          <h2 className='text-u-blue-500 relative mb-12 text-center text-3xl font-semibold uppercase lg:text-3xl xl:text-4xl'>
            Psicoterapia para el Tratamiento de abuso de alcohol y drogas
          </h2>
          <p className='mb-4 text-center'>
            El Diplomado tiene como objetivo comprender la dinámica sintomática
            compleja involucrada en el proceso de adicción, bajo el concepto de
            diferenciación e individualidad de la persona, utilizando las redes
            de acompañamiento y protección del paciente, aún en ausencia de
            estas.
          </p>
          <p className='mb-4 text-center'>
            Integrar cómo los procesos psicobiológicos, vinculares y ontogénicos
            (desarrollo vital) están a la base como probables detonantes de los
            procesos de adicción.
          </p>
          <p className='text-center'>
            Manejar una epistemología y una metodología basadas en la
            subjetividad del ser humano. Modelo clínico propuesto por la Unidad
            de Adicciones de la Facultad de Ciencias Médicas Usach.
          </p>
        </div>
      </div>

      <div className='z-20 mx-auto flex w-full max-w-5xl justify-center px-4 sm:px-6 lg:px-8 xl:flex-row'>
        <div className='grid w-full grid-cols-1 gap-y-8 xl:grid-cols-4'>
          <IntroElement
            icon={<FiEdit fontSize='30' color='#fff' />}
            title='Duración'
            text='189 horas'
            extra='(pedagógicas y autónomas)'
          />
          <IntroElement
            icon={<FiClock fontSize='30' color='#fff' />}
            title='Horario de clases'
            text='18:00 a 21:00 horas'
          />
          <IntroElement
            icon={<MdLaptopMac fontSize='30' color='#fff' />}
            title='Modalidad'
            text='Online'
          />
          <IntroElement
            icon={<FiCalendar fontSize='30' color='#fff' />}
            title='Inicio y término de clases'
            text='Abril a diciembre 2024'
          />
        </div>
      </div>
    </section>
  )
}
