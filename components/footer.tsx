import Image from 'next/image'

import logoBlanco from 'public/images/logo-blanco.png'

export default function Footer() {
  return (
    <footer className='bg-gray-600 py-10 text-xs font-normal text-slate-100'>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:flex-row lg:px-8'>
        <div className='mb-6 flex w-full justify-center lg:mb-0 lg:w-3/12 lg:justify-start'>
          <div className='relative'>
            <Image
              src={logoBlanco}
              placeholder='blur'
              alt='Universidad de Santiago de Chile'
              width={255}
              height={131}
            />
          </div>
        </div>
        <div className='mb-6 w-full lg:mb-0 lg:w-7/12'>
          <div className='text-center'>
            <p className='mb-1'>
              Unidad de Adicciones - Universidad de Santiago de Chile © 2022
            </p>
            <p className='mb-1'>
              <a
                href='https://goo.gl/maps/i1uc4cCk35gBvUNU7'
                target={'_blank'}
                rel='noreferrer'
                title='Unidad de Adicciones'
                className='hover:text-slate-300'
              >
                Amapolas 2095, Providencia, Santiago
              </a>
            </p>
            <p className='mb-1'>
              Tel{' '}
              <a href='tel:+56 2225 4000' className='hover:text-slate-300'>
                (562) 225 4000
              </a>
            </p>
            <p className='mb-1'>
              Correo Electrónico:
              <br />
              <a
                href='mailto:melissa.diaz@usach.cl'
                className='hover:text-slate-300'
              >
                melissa.diaz@usach.cl
              </a>
            </p>
          </div>
        </div>
        <div className='w-full lg:w-2/12'>
          <div className='text-center'>
            <p>Desarrollado por:</p>
            <p>
              <a
                href='https://www.linkedin.com/in/nikosantis/'
                target={'_blank'}
                rel='noreferrer'
                title='Nikolas Santis'
                className='hover:text-slate-300'
              >
                Nikolas Santis
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
