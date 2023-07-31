import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'
import { FaWhatsapp } from 'react-icons/fa'
import { Roboto_Flex } from 'next/font/google'
import { pushEvent } from 'lib/gtm'

const roboto = Roboto_Flex({
  weight: 'variable',
  variable: '--font-roboto',
  subsets: ['latin']
})

export default function WhatsApp() {
  return (
    <div className='fixed bottom-8 left-8 z-50'>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className={clsx(
              'rounded-full bg-wsp-500 p-4 text-white shadow-md transition-all',
              'focus:outline-none focus-visible:ring-0',
              'hover:bg-wsp-600',
              'radix-state-open:bg-wsp-700',
              'radix-state-on:bg-wsp-700',
              'radix-state-delayed-open:bg-wsp-700 radix-state-instant-open:bg-wsp-700',
              'inline-flex items-center justify-center'
            )}
            aria-label='Contactar por WhatsApp'
          >
            <FaWhatsapp size='26' />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            align='start'
            sideOffset={10}
            side='top'
            className={clsx(
              roboto.variable,
              'radix-side-bottom:animate-slide-down radix-side-top:animate-slide-up',
              'shadow-md6 w-96 rounded-md',
              'relative z-50 font-sans'
            )}
          >
            <DropdownMenu.Item className='flex w-full flex-col'>
              <div className='flex rounded-t-md bg-[#075e54] p-2'>
                <div className='mr-2 h-[40px] w-[40px] rounded-full bg-white'></div>
                <div className='flex flex-col text-left text-white'>
                  <div>
                    <span className='font-bold'>WhatsApp Admisión</span>
                  </div>
                  <div className='inline-flex items-center'>
                    <span className='mr-1 block h-2 w-2 rounded-full bg-[#25d366]' />
                    <span className='text-xs'>en línea</span>
                  </div>
                </div>
              </div>
              <div className='select-none bg-[#e4dcd5] p-4'>
                <div className='flex w-full items-center justify-center'>
                  <div className='w-full max-w-[85%] rounded-lg text-zinc-800'>
                    <div className='relative rounded-md bg-white shadow'>
                      <div className='flex flex-col p-[6px_7px_8px_9px]'>
                        <div className='max-w-[80%] whitespace-pre-wrap text-sm'>
                          Hola <br />
                          ¿Necesitas más información del diplomado?
                        </div>
                        <div className='-mt-3 -mb-2 self-end'>
                          <span className='text-xs text-zinc-400'>
                            {new Date().toLocaleTimeString('es-CL', {
                              hour: 'numeric',
                              minute: 'numeric',
                              hour12: false,
                              timeZone: 'America/Santiago'
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='rounded-b-md bg-[#f0f0f0]'>
                <a
                  href='https://api.whatsapp.com/send?phone=56961640345'
                  target='_blank'
                  rel='noreferrer'
                  className='block cursor-text'
                  onClick={() => {
                    pushEvent('wspClicked')
                  }}
                >
                  <div className='flex h-[62px] w-full items-center justify-center rounded-b-md bg-[#f0f0f0] py-3 px-6'>
                    <div className='flex h-full w-full items-center justify-center rounded-3xl bg-white px-5'>
                      <div className='w-full'>
                        <span className='text-sm text-slate-500'>
                          Escribe tu mensaje aquí
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
}
