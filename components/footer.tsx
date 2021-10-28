import Image from 'next/image'

import usachLogo from 'public/images/logo-blanco.png'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col-lg-3 col-12'>
            <div className='footer-logo'>
              <Image
                src={usachLogo}
                alt='Universidad de Santiago de Chile'
                className='img-fluid'
                placeholder='blur'
              />
            </div>
          </div>
          <div className='col-lg-7 col-12'>
            <div className='footer-texts'>
              <div className='footer-box'>
                <p>Unidad de Adicciones – Universidad de Santiago de Chile © 2020</p>
                <p>
                  <a href='https://goo.gl/maps/i1uc4cCk35gBvUNU7'>
                    Amapolas 2095, Providencia, Santiago
                  </a>
                </p>
                <p>
                  Tel <a href='tel:+56 2225 4000'>(562) 225 4000</a>
                </p>
                <p>
                  Correo Electrónico:{' '}
                  <a href='mailto:melissa.diaz@usach.cl'>melissa.diaz@usach.cl</a>
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-12'>
            <div className='footer-texts'>
              <div className='footer-box'>
                <p>Desarrollado por:</p>
                <p>
                  <a href='https://www.linkedin.com/in/nikosantis/'>Nikolas Santis</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer {
            background-color: var(--casper-footer-background);
            padding: 40px 0;
          }

          .footer-logo {
            display: flex;
            justify-content: center;
            align-items: stretch;
            width: 100%;
          }
          @media (min-width: 992px) {
            .footer-logo {
              justify-content: start;
            }
          }
          .footer-logo img {
            margin-bottom: 50px;
            width: 200px;
            align-self: flex-start;
          }
          @media (min-width: 992px) {
            .footer-logo img {
              width: 100%;
              margin-bottom: 0px;
            }
          }

          .footer-texts {
            color: var(--casper-intro-bg);
            text-align: center;
            height: 100%;
            align-items: center;
            display: flex;
            justify-content: center;
          }
          .footer-texts:first-of-type {
            margin-bottom: 20px;
          }
          @media (min-width: 992px) {
            .footer-texts:first-of-type {
              margin-bottom: 0px;
            }
          }

          .footer-box {
            display: flex;
            flex-direction: column;
          }

          p {
            font-size: 0.785rem;
            margin: 0;
          }

          a {
            color: var(--casper-intro-bg);
            transition: color 0.2s ease;
          }

          a:hover {
            color: #fff;
          }
        `}
      </style>
    </footer>
  )
}
