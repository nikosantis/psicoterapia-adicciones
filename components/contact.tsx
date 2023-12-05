'use client'

import { useScroll } from '@/lib/contexts/scroll'
import ContactForm from './contact-form'

export default function Contact() {
  const { contactRef } = useScroll()
  return (
    <section className='relative py-24' ref={contactRef}>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-wrap'>
          <div className='mb-6 w-full'>
            <h2 className='mb-2 text-center text-4xl font-medium lg:text-left'>
              Postula Aquí
            </h2>
            <h3 className='text-2xl font-medium uppercase'>
              Admisión Noviembre 2023
            </h3>
          </div>

          <div className='mb-6 w-full lg:mb-0 lg:w-6/12 lg:pr-3'>
            <h3 className='mb-1 font-bold'>Requisitos:</h3>

            <p className='mb-4 text-center lg:text-left'>
              Profesional o Licenciado en el Área de Salud (Médicos,
              Psiquiatras, Psicólogos/as Trabajadores Sociales)
            </p>

            {/* <p className='mb-6 text-center lg:text-left'>
              ¡Matrículas abiertas!
            </p> */}

            <h3 className='mb-1 font-bold'>Duración del diplomado:</h3>

            <p className='mb-4 text-center lg:text-left'>
              189 horas (pedagógicas y autónomas)
            </p>

            <h3 className='mb-1 font-bold'>Horario de clases:</h3>

            <p className='mb-4 text-center lg:text-left'>18:00 a 21:00 horas</p>

            <h3 className='mb-1 font-bold'>Inicio de clases:</h3>

            <p className='mb-4 text-center lg:text-left'>19 de abril 2023</p>

            <h3 className='mb-1 font-bold'>Término de clases:</h3>

            <p className='mb-4 text-center lg:text-left'>
              13 de diciembre 2023
            </p>
          </div>

          <div className='w-full lg:w-6/12 lg:pl-3'>
            <div className='rounded-md bg-slate-100 px-8 py-12'>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
