import { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children: ReactNode
}

export default function PageContainer({ children }: Props) {
  return (
    <div className='wrapper'>
      <Head>
        <title>Diplomado en Adicciones | Universidad de Santiago de Chile</title>
        <meta
          property='og:title'
          content='Diplomado en Adicciones | Universidad de Santiago de Chile'
        />
        <meta
          name='description'
          content='Diplomado Clínico Internacional - Psicoterapia para el Tratamiento de abuso de alcohol y drogas. Universidad de Santiago de Chile.'
        />
        <meta
          property='og:description'
          content='Diplomado Clínico Internacional - Psicoterapia para el Tratamiento de abuso de alcohol y drogas. Universidad de Santiago de Chile.'
        />
        <meta
          property='og:image'
          content='https://diplomadopsicoterapia.cl/images/og-image.png'
        />
        <meta property='og:url' content='https://diplomadopsicoterapia.cl/' />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='es_ES' />
        <meta httpEquiv='Content-Language' content='es' />
        <meta name='author' content='Nikolas Santis' />
      </Head>

      {children}

      <style jsx>
        {`
          .wrapper {
            width: 100vw;
            min-height: 100vh;
          }
        `}
      </style>
      <style jsx global>
        {`
          body {
            scroll-behavior: smooth;
            background-color: var(--casper-background);
            color: var(--casper-foreground);
            text-rendering: optimizeSpeed;
          }

          a {
            transition: color 0.2s ease;
          }

          .nav-link {
            text-transform: uppercase;
            cursor: pointer;
            &:hover {
              color: rgba(0, 0, 0, 0.9);
            }
          }

          /* Remove all animations and transitions for people that prefer not to see them */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }
        `}
      </style>
    </div>
  )
}
