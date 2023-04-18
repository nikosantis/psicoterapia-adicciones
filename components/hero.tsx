import Image from 'next/image'

import { useScroll } from 'lib/contexts/scroll'
import introImg from 'public/images/intro.png'

export default function Hero() {
  const { homeRef } = useScroll()
  return (
    <section
      className='relative flex min-h-screen flex-col items-center justify-center bg-[#cdcdcd] py-12 xl:items-center xl:py-24'
      ref={homeRef}
    >
      <div className='z-20 mx-auto mb-8 flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:mb-0 lg:flex-row lg:px-8 xl:flex-row'>
        <div className='w-full lg:w-6/12 xl:w-6/12'>
          <h5 className='relative mb-2 text-center text-xl font-light uppercase text-zinc-700 xl:text-left'>
            Diplomado Clínico
          </h5>
          <h1 className='mb-2" relative text-center text-3xl font-semibold uppercase text-u-blue-500 lg:text-3xl xl:text-left xl:text-4xl'>
            Psicoterapia para el Tratamiento de abuso de alcohol y drogas
          </h1>
          <h2 className='mb-2 text-center text-xl font-medium uppercase text-zinc-700 lg:text-3xl xl:text-left'>
            Aproximación Neuroafectiva Constructivista
          </h2>

          <h3 className='mb-12 text-center text-xl font-medium uppercase text-u-orange-primary-500 lg:text-3xl xl:text-left'>
            ¡Últimas Semanas de Admisión!
          </h3>

          <div className='mb-12 flex justify-center xl:justify-start'>
            <div className='mr-3 w-1/2 xl:mr-4 xl:w-[200px]'>
              <div className='mb-4 w-full rounded-tl-3xl bg-u-blue-500 py-3 px-4'>
                <span className='uppercase text-white'>Metodología</span>
              </div>
              <div className='px-6 uppercase text-u-blue-500'>
                <ul className='list-disc'>
                  <li>Clases</li>
                  <li>Seminarios</li>
                  <li>
                    Psicoterapia Individual y Grupal <b>Online</b>
                  </li>
                </ul>
              </div>
            </div>
            <div className='w-1/2 xl:w-[200px]'>
              <div className='mb-4 w-full rounded-br-3xl bg-u-blue-500 py-3 px-4'>
                <span className='uppercase text-white'>Dirigido a</span>
              </div>
              <div className='px-6 uppercase text-u-blue-500'>
                <ul className='list-disc'>
                  <li>Psicólogos</li>
                  <li>Psiquiatras</li>
                  <li>Médicos</li>
                  <li>Trabajadores Sociales</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full lg:w-1/2 xl:w-1/2'>
          <div className='flex h-full justify-center lg:items-end lg:justify-end'>
            <div className='flex flex-col'>
              <div className='text-center xl:text-left'>
                <span className='text-3xl font-semibold uppercase text-u-orange-primary-500'>
                  Matrículas abiertas
                </span>
              </div>
              <div className='text-center xl:text-left'>
                <span className='text-3xl font-semibold uppercase text-u-blue-500'>
                  100% Online
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative flex h-[200px] w-full md:h-[575px] md:w-[500px] lg:absolute lg:right-[5%] lg:left-auto lg:bottom-0 lg:z-10 lg:h-[575px] lg:w-[500px] xl:bottom-0 xl:left-auto xl:right-[5%] xl:m-0 xl:h-[575px] xl:w-[500px]'>
        <Image
          src={introImg}
          alt='Diplomado Clínico'
          placeholder='blur'
          fill
          sizes='35vw'
          className='object-contain lg:mx-auto'
        />
      </div>
    </section>
  )
}
