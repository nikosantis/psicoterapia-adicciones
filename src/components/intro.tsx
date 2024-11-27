'use client'

import { FiCalendar, FiClock, FiEdit } from 'react-icons/fi'
import { MdLaptopMac } from 'react-icons/md'

import { useScroll } from '@/lib/contexts/scroll'
import IntroElement from '@/components/intro-element'

export default function Intro() {
  const { aboutRef } = useScroll()
  return (
    <section className='relative bg-white py-24' ref={aboutRef}>
      <div className='z-20 mx-auto mb-16 flex w-full max-w-7xl justify-center px-4 sm:px-6 lg:px-8 xl:flex-row'>
        <div className='w-full xl:w-7/12'>
          <h5 className='relative mb-2 text-center text-xl font-light uppercase text-zinc-700'>
            Diplomado Clínico
          </h5>
          <h2 className='relative mb-12 text-center text-3xl font-semibold uppercase text-u-blue-500 lg:text-3xl xl:text-4xl'>
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
          <p className='mb-4 text-center'>
            Manejar una epistemología y una metodología basadas en la
            subjetividad del ser humano. Modelo clínico propuesto por la Unidad
            de Adicciones de la Facultad de Ciencias Médicas Usach.
          </p>
          <p className='text-center text-lg'>
            <strong>
              Premio Iberoamericano Reina Sofía de España contra las Drogas
              2002.
            </strong>
          </p>
        </div>
      </div>

      <div className='z-20 mx-auto flex w-full max-w-5xl justify-center px-4 sm:px-6 lg:px-8 xl:flex-row'>
        <div className='grid w-full grid-cols-1 gap-y-8 xl:grid-cols-5 xl:gap-x-4'>
          <IntroElement
            icon={<FiEdit fontSize='30' color='#fff' />}
            title='Duración'
            content={
              <>
                <p>189 horas</p>
                <p>
                  <small>(pedagógicas y autónomas)</small>
                </p>
              </>
            }
          />
          <IntroElement
            icon={<FiClock fontSize='30' color='#fff' />}
            title='Horario de clases'
            content={<p>18:00 a 21:00 horas</p>}
          />
          <IntroElement
            icon={<MdLaptopMac fontSize='30' color='#fff' />}
            title='Modalidad'
            content={<p>En línea con clases sincrónicas</p>}
          />
          <IntroElement
            icon={<FiCalendar fontSize='30' color='#fff' />}
            title='Inicio y término de clases'
            content={<p>Abril a diciembre 2025</p>}
          />
          <IntroElement
            icon={<FiEdit fontSize='30' color='#fff' />}
            title='Requisitos de aprobación'
            content={
              <>
                <p>Asistencia mínima 75%</p>
                <p>Nota aprobación: 4.0</p>
                <p>Cámara encendida</p>
              </>
            }
          />
        </div>
      </div>
    </section>
  )
}
