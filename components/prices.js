import { Link as LinkScroll } from 'react-scroll'

export default function Price () {
  return (
    <section className='price'>
      <div className='container'>
        <div className='row justify-content-center align-items-center'>
          <div className='col-lg-4'>
            <div className='box text-center'>
              <h3>Matrícula</h3>
              <p>$63.000</p>
            </div>
            <div className='box text-center'>
              <h3>Arancel</h3>
              <p>$680.000</p>
            </div>
          </div>

          <div className='col-lg-4'>
            <div className='box'>
              <h3>Formas de pago Arancel</h3>
              <ul>
                <li>Pago contado 10% descuento</li>
                <li>Pago tarjetas de crédito según el banco 3 -6- 10 cuotas precio contado</li>
                <li>Pago cuotas con Pagaré</li>
              </ul>
            </div>
          </div>

          <div className='col-lg-4 text-center'>
            <div className='info'>
              <LinkScroll
                className='nav-link'
                to='contact'
                spy
                smooth
                duration={500}
              >
                <button className='btn btn-primary btn-lg'>Obtener Más Información</button>
              </LinkScroll>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .price {
            padding: 90px 0;
            background-color: #f8f9fa;
          }

          .box {
            background-color: #ffffff;
            padding: 30px 20px;
            border-radius: 5px;
            margin-bottom: 15px;

            h3 {
              margin-bottom: 20px;
              font-size: 1.5rem;
            }

            p {
              margin-bottom: 0;
            }
          }

          .info {
            padding: 30px 0;
            padding-top: 50px;

            @media (min-width: 992px) {
              padding: 30px 0;
            }
          }
        `}
      </style>
    </section>
  )
}
