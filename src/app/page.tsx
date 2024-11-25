import type { Metadata, Viewport } from 'next'

import { DESCRIPTION, TITLE } from '@/lib/constants'
import Contact from '@/components/contact'
import Hero from '@/components/hero'
import Intro from '@/components/intro'
import Modules from '@/components/modules'
import Prices from '@/components/prices'
import Separator from '@/components/separator'
import Teachers from '@/components/teachers'

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'https://diplomadopsicoterapia.cl/'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
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
  alternates: {
    canonical: '/',
  },
  // manifest: '/manifest.json',
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
