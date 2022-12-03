import { Fragment } from 'react'
import clsx from 'clsx'

import { useScroll } from 'lib/contexts/scroll'
import { navigation } from 'lib/navigation'
import { Transition } from '@headlessui/react'
import { useMobile } from 'lib/contexts/mobile'

export default function MobileNav() {
  const { isOpen } = useMobile()
  const { handleScrollTo, sectionActive } = useScroll()

  return (
    <Transition
      as={Fragment}
      enter='transition ease-out duration-100'
      enterFrom='transform opacity-0 scale-95'
      enterTo='transform opacity-100 scale-100'
      leave='transition ease-in duration-100'
      leaveFrom='transform opacity-100 scale-100'
      leaveTo='transform opacity-0 scale-95'
      show={isOpen}
    >
      <div className='absolute top-full z-50 block w-full origin-top bg-white p-4 shadow-md lg:hidden'>
        <div className='flex flex-col text-center'>
          {navigation.map((navi) => {
            const isActive = navi.scrollTo === sectionActive
            return (
              <button
                title={navi.title}
                key={navi.id}
                onClick={() => handleScrollTo(navi.scrollTo)}
                className={clsx(
                  'py-2 px-3 uppercase transition-all',
                  isActive
                    ? 'text-u-orange-primary-500'
                    : 'font-normal text-zinc-500',
                  'hover:text-slate-700'
                )}
              >
                {navi.title}
              </button>
            )
          })}
        </div>
      </div>
    </Transition>
  )
}
