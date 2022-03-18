import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

export default function FirstSeparator() {
  return (
    <section className='separator'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-9 col-12'>
            <div className='quote-left'>
              <FaQuoteLeft fontSize='30' color='var(--casper-orange)' />
            </div>
            <div>
              <p>
                <b>
                  El modelo entrega una comprensión del ser humano más allá de los
                  enfoques de control externo del paciente{' '}
                </b>
                (sea a través de técnicas directivas/conductuales), el control
                psicofarmacológico extremo, y la sobre-patologización de la experiencia
                adictiva.
              </p>
            </div>
            <div className='quote-right'>
              <FaQuoteRight fontSize='30' color='var(--casper-orange)' />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .separator {
            padding: 90px 0;
            background-color: var(--casper-intro-bg);
          }

          .quote-left {
            margin-bottom: 25px;
            display: flex;
          }

          .quote-right {
            margin-top: 25px;
            display: flex;
            justify-content: flex-end;
          }

          p {
            text-align: center;
          }
          @media (min-width: 992px) {
            p {
              font-size: 1.2rem;
            }
          }
        `}
      </style>
    </section>
  )
}
