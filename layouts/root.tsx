import { ReactNode } from 'react'

import Seo, { CustomMetaType } from 'components/seo'
import GTMPageView from 'components/gtm-page-view'
import Navbar from 'components/navbar'
import Footer from 'components/footer'

type RootLayoutProps = {
  children: ReactNode
  customMeta?: CustomMetaType
}

export default function RootLayout({ children, customMeta }: RootLayoutProps) {
  return (
    <div className='h-full w-full'>
      <GTMPageView />
      <Seo customMeta={customMeta} />
      <Navbar />
      <div className='h-full w-full'>{children}</div>
      <Footer />
    </div>
  )
}
