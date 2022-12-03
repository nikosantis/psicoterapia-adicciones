import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

import logoImg from 'public/images/fcm-logo.png'
import introImg from 'public/images/intro.png'
import RootLayout from 'layouts/root'

export default function Custom404() {
  return (
    <RootLayout>
      <main role='main' className='h-screen w-screen'>
        <div className='relative flex h-full w-full items-center justify-center bg-[#cdcdcd] py-12 xl:py-24'>
          <div className='z-20 mx-auto mb-8 w-full max-w-7xl px-4 sm:px-6 lg:mb-0 lg:px-8'>
            <div className='row'>
              <div className='col-12'>
                <div className='mb-6'>
                  <Image
                    src={logoImg}
                    alt='Diplomado en Adicciones | Universidad de Santiago de Chile'
                    placeholder='blur'
                  />
                </div>
                <h1 className='mb-4 text-3xl'>404 - Página no encontrada</h1>
                <p className='mb-6'>Vuelve a la página principal</p>
                <Link
                  href='/'
                  className={clsx(
                    'select-none rounded bg-u-orange-primary-500 py-2 px-3 text-center font-medium text-white transition-all hover:bg-u-orange-primary-700',
                    'disabled:pointer-events-none disabled:cursor-not-allowed disabled:select-none disabled:bg-u-orange-primary-500/40',
                    'inline-flex'
                  )}
                >
                  Volver
                </Link>
              </div>
            </div>
          </div>
          <div className='absolute bottom-0 left-0 right-0 z-10 mx-auto w-[55%] xl:left-auto xl:right-[5%] xl:m-0 xl:w-[500px]'>
            <Image
              src={introImg}
              placeholder='blur'
              alt='Diplomado en Adicciones | Universidad de Santiago de Chile'
              className='img-fluid'
            />
          </div>
        </div>
      </main>
    </RootLayout>
  )
}
