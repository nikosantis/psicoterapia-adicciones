'use client'

import Image from 'next/image'
import logoImg from '@/public/images/fcm-logo.png'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import { HiMenu } from 'react-icons/hi'
import { TITLE, navigation } from '@/lib/constants'
import { useScroll } from '@/lib/contexts/scroll'
import { cn } from '@/lib/utils'

export default function MobileNav() {
  const { handleScrollTo, sectionActive } = useScroll()

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className='flex items-center justify-center lg:hidden'>
          <button
            className={clsx(
              'flex h-12 w-12 items-center justify-center rounded-md border border-zinc-400',
              'transition-all',
              'text-zinc-700 data-[state=open]:bg-zinc-200',
              'data-[state=closed]:text-zinc-600',
            )}
          >
            <HiMenu className='' size={28} />
          </button>
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            'fixed inset-0 z-50 bg-white/80 backdrop-blur-sm',
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          )}
        />
        <Dialog.Content
          className={cn(
            'fixed inset-y-0 left-0 z-50 h-full w-3/4 gap-4 border-r bg-white p-6 pr-0 shadow-lg transition ease-in-out sm:max-w-sm',
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left data-[state=closed]:duration-300 data-[state=open]:duration-500',
          )}
        >
          <div className='pt-8'>
            <div className='mb-6'>
              <button
                title={TITLE}
                className='relative block h-[60px] w-[220px] xl:h-[60px] xl:w-[300px]'
                onClick={() => {
                  handleScrollTo('home')
                }}
              >
                <Image
                  src={logoImg}
                  alt={TITLE}
                  placeholder='blur'
                  fill
                  sizes='(max-width: 768px) 80vw,(max-width: 1200px) 25vw'
                  className='object-contain'
                />
              </button>
            </div>
            <div className='flex flex-col'>
              {navigation.map((navi) => {
                const isActive = navi.scrollTo === sectionActive
                return (
                  <Dialog.Close asChild key={navi.id}>
                    <button
                      title={navi.title}
                      onClick={() => {
                        handleScrollTo(navi.scrollTo)
                      }}
                      className={clsx(
                        'py-3 text-left uppercase transition-all',
                        isActive
                          ? 'text-u-orange-primary-500'
                          : 'font-normal text-zinc-500',
                        'hover:text-slate-700',
                      )}
                    >
                      {navi.title}
                    </button>
                  </Dialog.Close>
                )
              })}
            </div>
          </div>

          <Dialog.Close asChild>
            <button
              className={cn(
                'hover:bg-violet4 focus:shadow-violet7 inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-slate-800',
                'absolute right-[10px] top-[10px]',
                'focus:shadow-[0_0_0_2px] focus:outline-none',
              )}
              aria-label='Close'
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
