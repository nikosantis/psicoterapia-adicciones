import Link from 'next/link'

export default function Custom404 () {
  return (
    <main>
      <div className='wrapper'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='logo'>
                <img src='/images/fcm-logo.png' />
              </div>
              <h1>404 - Página no encontrada</h1>
              <p>Vuelve a la página principal</p>
              <Link href='/'>
                <a className='btn btn-usach'>Volver</a>
              </Link>
            </div>
          </div>
        </div>
        <div className='intro-float'>
          <img src='/images/intro.png' className='img-fluid' />
        </div>
      </div>
      <style jsx>
        {`
          main {
            width: 100vw;
            height: 100vh;
          }
          .wrapper {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--casper-intro-bg);
            position: relative;
          }

          .intro-float {
            position: absolute;
            bottom: 0;
            z-index: 1;
            width: 55%;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;

            @media (min-width: 992px) {
              width: 500px;
              margin: 0;
              right: 5%;
              left: auto;
            }
          }

          .logo {
            margin-bottom: 25px;
          }
          h1 {
            font-size: 2rem;
            margin-bottom: 25px;
          }

          .btn-usach {
            color: #fff;
            background-color: var(--casper-orange);
            border-color: var(--casper-orange);
            transition: all 0.2s ease;

            &:hover {
              background-color: var(--casper-orange-hover);
              border-color: var(--casper-orange-hover);
            }

            &:disabled {
              color: #fff;
              opacity: .5;
              cursor: not-allowed;
            }
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
              color: rgba(0,0,0,.9);
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
    </main>
  )
}
