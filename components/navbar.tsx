'use client'

import Image from 'next/image'
import Link from 'next/link'
import logoImg from '@/public/images/fcm-logo.png'
import { TITLE } from '@/lib/constants'
import { MobileProvider } from '@/lib/contexts/mobile'
import Header from './header'
import MobileNav from './mobile-nav'
import Nav from './nav'

export default function Navbar() {
  return (
    <MobileProvider>
      <Header>
        <nav className='relative w-full bg-slate-100 py-2'>
          <div className='mx-auto flex max-w-7xl justify-between px-4 sm:px-6 lg:px-8'>
            <Link
              href='/'
              title={TITLE}
              className='relative block h-[60px] w-[220px] xl:h-[60px] xl:w-[300px]'
            >
              <Image
                src={logoImg}
                alt={TITLE}
                placeholder='blur'
                priority
                fill
                sizes='(max-width: 768px) 80vw,(max-width: 1200px) 25vw'
                className='object-contain'
              />
            </Link>

            <div className='flex'>
              <Nav />
              <MobileNav />
            </div>
          </div>
        </nav>
      </Header>
    </MobileProvider>
  )
}
