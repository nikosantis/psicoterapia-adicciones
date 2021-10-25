import type { AppProps } from 'next/app'
import 'styles/bootstrap.css'
import { cssBase } from 'styles/base'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {cssBase}
      </style>
    </>
  )
}
