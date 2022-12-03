import Avatar from './avatar'

import avatar1 from 'public/images/humberto-guajardo.png'
import avatar2 from 'public/images/diana-kushner.png'
import avatar3 from 'public/images/felipe-lecannelier.png'
import avatar5 from 'public/images/constanza-espinoza.jpg'
import { useScroll } from 'lib/contexts/scroll'

export default function Teachers() {
  const { teachersRef } = useScroll()
  return (
    <section className='py-24' ref={teachersRef}>
      <div className='mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8'>
        <div className='grid w-full grid-cols-1 gap-y-8 gap-x-6 lg:grid-cols-3'>
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
        </div>
      </div>
    </section>
  )
}
