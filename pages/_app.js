import '../styles/bootstrap.css'
import fontStyles from '../styles/fonts'
import baseStyles from '../styles/base'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {fontStyles}
      </style>
      <style jsx global>
        {baseStyles}
      </style>
    </>
  )
}
