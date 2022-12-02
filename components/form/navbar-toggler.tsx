import { HiMenu } from 'react-icons/hi'
import clsx from 'clsx'

import { useMobile } from 'lib/contexts/mobile'

export default function NavbarToggler() {
  const { isOpen, setIsOpen } = useMobile()
  return (
    <div className='lg:hidden flex justify-center items-center'>
      <button
        className={clsx(
          'border border-zinc-400 rounded-md w-12 h-12 flex justify-center items-center',
          'transition-all',
          isOpen ? 'bg-zinc-200 text-zinc-700' : 'text-zinc-600'
        )}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <HiMenu className='' size={28} />
      </button>
    </div>
  )
}
