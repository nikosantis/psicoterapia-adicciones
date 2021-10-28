import { Element } from 'react-scroll'
import Image from 'next/image'

import introImg from 'public/images/intro.png'

export default function Hero() {
  return (
    <Element name='hero'>
      <div className='intro'>
        <div className='intro-float'>
          <Image
            src={introImg}
            alt='Diplomado Clínico Internacional'
            className='img-fluid'
            placeholder='blur'
          />
        </div>

        <div className='container intro-container'>
          <div className='row'>
            <div className='col-xl-6 col-lg-12'>
              <h5 className='intro-pretitle'>Diplomado Clínico Internacional 2022</h5>
              <h1 className='intro-title'>
                Psicoterapia para el Tratamiento de abuso de alcohol y drogas
              </h1>
              <h2 className='intro-subtitle'>
                Aproximación Neuroafectiva Constructivista
              </h2>
              <div className='intro-slides'>
                <div className='intro-slides-box'>
                  <div className='intro-slides-pre intro-slides-pre-left'>
                    <p>Metodología</p>
                  </div>

                  <div className='intro-slides-texts'>
                    <ul>
                      <li>Clases</li>
                      <li>Seminarios</li>
                      <li>
                        Psicoterapia Individual y Grupal <b>Online</b>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='intro-slides-box'>
                  <div className='intro-slides-pre intro-slides-pre-right'>
                    <p>Dirigido a</p>
                  </div>

                  <div className='intro-slides-texts'>
                    <ul>
                      <li>Psicólogos</li>
                      <li>Psiquiatras</li>
                      <li>Médicos</li>
                      <li>Trabajadores Sociales</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-xl-6 col-lg-12 box-r'>
              <div className='intro-box'>
                <div className='intro-box-text'>
                  <div className='intro-box-left'>Postulaciones NOV 2021</div>
                  <div className='intro-box-right'>100% Online</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .intro {
              background-color: var(--casper-intro-bg);
              width: 100vw;
              min-height: 100vh;
              padding: 120px 0;
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
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
            }
            @media (min-width: 992px) {
              .intro-float {
                width: 500px;
                margin: 0;
                right: 5%;
                left: auto;
              }
            }
            .intro-container {
              z-index: 2;
            }

            .intro-title {
              color: var(--casper-blue);
              text-transform: uppercase;
              font-weight: 600;
              font-size: 2rem;
              text-align: center;
            }
            @media (min-width: 992px) {
              .intro-title {
                font-size: 2.5rem;
              }
            }
            @media (min-width: 1200px) {
              .intro-title {
                font-size: 2.5rem;
                text-align: left;
              }
            }

            .intro-pretitle {
              color: #3e3b3b;
              font-weight: 300;
              text-transform: uppercase;
              font-size: 1.2rem;
              text-align: center;
            }
            @media (min-width: 1200px) {
              .intro-pretitle {
                margin-top: 80px;
                text-align: left;
              }
            }

            .intro-subtitle {
              color: #3e3b3b;
              font-weight: 300;
              text-transform: uppercase;
              margin-bottom: 50px;
              font-size: 1.2rem;
              text-align: center;
            }
            @media (min-width: 992px) {
              .intro-subtitle {
                font-size: 2rem;
                margin-bottom: 25px;
              }
            }
            @media (min-width: 1200px) {
              .intro-subtitle {
                text-align: left;
              }
            }

            .intro-slides {
              display: flex;
              justify-content: center;
              margin-bottom: 50px;
            }

            @media (min-width: 1200px) {
              .intro-slides {
                margin-bottom: 0px;
                justify-content: start;
              }
            }
            .intro-slides-box {
              width: 50%;
            }
            @media (min-width: 992px) {
              .intro-slides-box {
                width: 200px;
              }
            }

            .intro-slides-box:first-of-type {
              margin-right: 10px;
            }
            @media (min-width: 992px) {
              .intro-slides-box:first-of-type {
                margin-right: 15px;
              }
            }

            .intro-slides-pre {
              background-color: var(--casper-blue);
              padding: 10px 15px;
              width: 100%;
            }
            @media (min-width: 992px) {
              .intro-slides-pre {
                width: 200px;
              }
            }

            .intro-slides-pre-left {
              border-top-left-radius: 25px;
            }

            .intro-slides-pre-right {
              border-bottom-right-radius: 25px;
            }

            .intro-slides-pre p {
              margin: 0;
              color: #fff;
              text-transform: uppercase;
              font-weight: 300;
              letter-spacing: 0.7px;
            }

            .intro-slides-texts {
              font-size: 1rem;
              color: var(--casper-blue);
              text-transform: uppercase;
              padding: 10px 15px;
            }

            .intro-slides-texts ul {
              margin: 0;
              padding: 0;
              padding-left: 16px;
            }

            .box-r {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-bottom: 110px;
            }
            @media (min-width: 992px) {
              .box-r {
                margin-bottom: 0;
              }
            }
            @media (min-width: 1200px) {
              .box-r {
                justify-content: flex-end;
                align-items: flex-end;
              }
            }
            .intro-box {
              display: flex;
            }

            .intro-box-text {
              width: 100%;
              flex-direction: column;
              font-size: 1.5rem;
              text-transform: uppercase;
              font-weight: 600;
              text-align: center;
            }
            @media (min-width: 992px) {
              .intro-box-text {
                font-size: 1.8rem;
                flex-direction: row;
                text-align: left;
                align-items: center;
              }
            }

            .intro-box-left {
              color: var(--casper-orange);
              font-weight: 600;
            }
            .intro-box-center {
              color: var(--casper-orange);
            }
            @media (min-width: 992px) {
              .intro-box-center {
                margin-right: 5px;
                margin-left: 5px;
              }
            }

            .intro-box-right {
              color: var(--casper-blue);
            }
          `}
        </style>
      </div>
    </Element>
  )
}
