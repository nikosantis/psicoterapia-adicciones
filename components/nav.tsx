import clsx from 'clsx'

import { useScroll } from 'lib/contexts/scroll'
import { navigation } from 'lib/navigation'

export default function Nav() {
  const { handleScrollTo, sectionActive } = useScroll()

  return (
    <div className='hidden lg:flex lg:items-center lg:justify-end lg:gap-1'>
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
                ? 'text-zinc-700 underline decoration-u-orange-primary-500 decoration-[3px] underline-offset-4'
                : 'font-normal text-zinc-500',
              'hover:text-slate-700'
            )}
          >
            {navi.title}
          </button>
        )
      })}
    </div>
  )
}
