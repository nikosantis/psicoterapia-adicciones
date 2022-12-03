import Link from 'next/link'
import Image from 'next/image'

import { MobileProvider } from 'lib/contexts/mobile'
import Header from 'components/header'
import { seoMetas } from 'lib/seo-metas'
import logoImg from 'public/images/fcm-logo.png'
import Nav from './nav'
import NavbarToggler from './form/navbar-toggler'
import MobileNav from './mobile-nav'

export default function Navbar() {
  return (
    <MobileProvider>
      <Header>
        <nav className='relative w-full bg-slate-100 py-2'>
          <div className='mx-auto flex max-w-7xl justify-between px-4 sm:px-6 lg:px-8'>
            <Link
              href='/'
              title={seoMetas.title}
              className='relative block h-[60px] w-[220px] xl:h-[60px] xl:w-[300px]'
            >
              <Image
                src={logoImg}
                alt={seoMetas.title}
                placeholder='blur'
                priority
                fill
                sizes='(max-width: 768px) 80vw,(max-width: 1200px) 25vw'
                className='object-contain'
              />
            </Link>

            <div className='flex'>
              <Nav />

              <NavbarToggler />
            </div>
          </div>

          <MobileNav />
        </nav>
      </Header>
    </MobileProvider>
  )
}
