import type { Metadata, Viewport } from 'next'
import Contact from '@/components/contact'
import Hero from '@/components/hero'
import Intro from '@/components/intro'
import Modules from '@/components/modules'
import Prices from '@/components/prices'
import Separator from '@/components/separator'
import Teachers from '@/components/teachers'
import { DESCRIPTION, TITLE } from '@/lib/constants'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: TITLE,
    description: DESCRIPTION,
    title: TITLE,
    images: '/og-image.png',
    locale: 'es_CL',
  },
  creator: 'Nikolas Santis',
  publisher: 'Nikolas Santis',
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://diplomadopsicoterapia.cl/'),
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function Home() {
  return (
    <>
      <Hero />
      <main role='main' className='w-full'>
        <Intro />
        <Separator />
        <Modules />
        <Teachers />
        <Prices />
        <Contact />
      </main>
    </>
  )
}
