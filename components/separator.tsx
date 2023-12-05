'use client'

import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

export default function Separator() {
  return (
    <section className='relative bg-zinc-200 py-24'>
      <div className='z-20 mx-auto flex w-full max-w-7xl justify-center px-4 sm:px-6 lg:px-8 xl:flex-row'>
        <div className='w-full flex-col xl:w-9/12'>
          <div className='justify-star mb-3 flex w-full'>
            <FaQuoteLeft fontSize='30' className='text-u-orange-primary-500' />
          </div>
          <div>
            <p className='text-center text-xl'>
              <strong>
                El modelo entrega una comprensión del ser humano más allá de los
                enfoques de control externo del paciente
              </strong>
              (sea a través de técnicas directivas/conductuales), el control
              psicofarmacológico extremo, y la sobre-patologización de la
              experiencia adictiva.
            </p>
          </div>
          <div className='mt-3 flex w-full justify-end'>
            <FaQuoteRight fontSize='30' className='text-u-orange-primary-500' />
          </div>
        </div>
      </div>
    </section>
  )
}
