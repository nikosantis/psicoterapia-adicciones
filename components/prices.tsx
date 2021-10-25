export default function Price() {
  return (
    <section className='price'>
      <div className='container'>
        <div className='row justify-content-center align-items-center'>
          <div className='col-lg-4'>
            <div className='box text-center'>
              <h3>Matrícula</h3>
              <p>$66.000 (valores referenciales al año 2021)</p>
            </div>
            <div className='box text-center'>
              <h3>Arancel</h3>
              <p>$900.000</p>
            </div>
          </div>

          <div className='col-lg-4'>
            <div className='box'>
              <h3>Formas de pago Arancel</h3>
              <ul>
                <li>Pago contado: 10% Descuento</li>
                <li>
                  Pago hasta en 10 cuotas de $90.000.- c/u (Marzo a Diciembre) con Letra o
                  Tarjeta de crédito.
                </li>
              </ul>
            </div>
          </div>

          <div className='col-lg-4 text-center'>
            <div className='info'>
              <a
                className='btn btn-usach'
                href='https://drive.google.com/file/d/1DmnGwOF8mdOh6opF30J5lsPIyr8l1cDt/view'
                target='_blank'
                rel='noreferrer'
              >
                Descargar Información
              </a>
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
              opacity: 0.5;
              cursor: not-allowed;
            }
          }
        `}
      </style>
    </section>
  )
}
