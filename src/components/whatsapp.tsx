'use client'

import { Roboto_Flex } from 'next/font/google'
import Image from 'next/image'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import iconWsp from 'public/images/icon-wsp.png'
import { FaWhatsapp } from 'react-icons/fa'

import { cn } from '@/lib/utils'

import WspContent from './wsp-content'

const roboto = Roboto_Flex({
  weight: 'variable',
  variable: '--font-roboto',
  subsets: ['latin'],
})

export default function WhatsApp() {
  return (
    <div className='fixed bottom-8 z-50 md:left-8'>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className={cn(
              'rounded-full bg-wsp-500 p-4 text-white shadow-md transition-all',
              'focus:outline-none focus-visible:ring-0',
              'hover:bg-wsp-600',
              'radix-state-open:bg-wsp-700',
              'radix-state-on:bg-wsp-700',
              'radix-state-delayed-open:bg-wsp-700 radix-state-instant-open:bg-wsp-700',
              'inline-flex items-center justify-center',
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
            className={cn(
              roboto.variable,
              'radix-side-bottom:animate-slide-down radix-side-top:animate-slide-up',
              'w-screen rounded-md px-2 shadow-md md:w-96 md:p-0',
              'relative z-50 font-sans',
            )}
          >
            <div className='flex w-full flex-col'>
              <div className='flex rounded-t-md bg-[#075e54] p-2'>
                <div className='mr-2 size-[40px] rounded-full bg-white'>
                  <Image
                    src={iconWsp}
                    alt='Admisión 2025 WhatsApp'
                    className='rounded-full'
                  />
                </div>
                <div className='flex flex-col text-left text-white'>
                  <div>
                    <span className='font-bold'>WhatsApp Admisión</span>
                  </div>
                  <div className='inline-flex items-center'>
                    <span className='mr-1 block size-2 rounded-full bg-[#25d366]' />
                    <span className='text-xs'>en línea</span>
                  </div>
                </div>
              </div>
              <div className='select-none bg-[#e4dcd5] p-4'>
                <WspContent />
              </div>
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
}
