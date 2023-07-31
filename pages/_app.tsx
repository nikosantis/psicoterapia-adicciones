import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto_Flex } from 'next/font/google'
import clsx from 'clsx'
import Script from 'next/script'

import { GTM_ID } from 'lib/gtm'
import { ScrollProvider } from 'lib/contexts/scroll'
import WhatsApp from 'components/whatsapp'

const roboto = Roboto_Flex({
  weight: 'variable',
  variable: '--font-roboto',
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ScrollProvider>
      <div
        className={clsx(
          roboto.variable,
          'h-full w-full font-sans text-base font-normal text-slate-500'
        )}
      >
        <Script
          id='GTM'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `
          }}
        />
        <Component {...pageProps} />
        <WhatsApp />
      </div>
    </ScrollProvider>
  )
}
