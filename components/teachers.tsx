'use client'

import avatar5 from '@/public/images/constanza-espinoza.jpg'
import avatar2 from '@/public/images/diana-kushner.png'
import avatar3 from '@/public/images/felipe-lecannelier.png'
import avatar1 from '@/public/images/humberto-guajardo.png'
import avatar6 from '@/public/images/victor-ojeda.png'
import Avatar from '@/components/avatar'
import { useScroll } from '@/lib/contexts/scroll'

export default function Teachers() {
  const { teachersRef } = useScroll()
  return (
    <section className='py-24' ref={teachersRef}>
      <div className='mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8'>
        <div className='grid w-full grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3'>
          <div className='flex'>
            <Avatar
              src={avatar1}
              name='Prof. Dr. Humberto Guajardo Sáinz'
              title='Director'
              content='Médico Psiquiatra. Decano de la Facultad de Ciencias Médicas de la Universidad de Santiago.'
            />
          </div>

          <div className='flex'>
            <Avatar
              src={avatar2}
              name='Sra. Diana Kushner Lanis'
              content='Psicóloga Magister en Psicoterapia Cognitiva Postracionalista, USACH., Antropóloga social. Profesora en Prevención y Rehabilitación de Drogas de la Facultad de Ciencias Médicas de la Universidad de Santiago'
            />
          </div>

          <div className='flex'>
            <Avatar
              src={avatar3}
              name='Sr. Felipe Lecannelier Acevedo'
              content='Dr. en Psicología Universidad Autónoma de Madrid - España'
            />
          </div>

          <div className='flex'>
            <Avatar
              src={avatar5}
              name='Ps. Mag. Constanza Espinoza'
              content='Magister en Psicoterapia'
            />
          </div>

          <div className='flex'>
            <Avatar
              src={avatar6}
              name='Ps. Víctor Andrés Ojeda Pacheco'
              content='Magister en Ciencias Biológicas con mención en Neurociencias de la Universidad de Valparaíso.'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
