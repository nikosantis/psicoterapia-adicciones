export default function Hero () {
  return (
    <div className='intro'>
      <div className='intro-float'>
        <img src='/images/intro.png' className='img-fluid' />
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <h5 className='intro-pretitle'>Diplomado Clínico Internacional</h5>
            <h1 className='intro-title'>Psicoterapia para el Tratamiento de abuso de alcohol y drogas</h1>
            <h2 className='intro-subtitle'>Aproximación Neuroafectiva Constructivista</h2>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .intro {
            background-color: var(--casper-intro-bg);
            width: 100vw;
            height: 100vh;
            padding: 120px 0;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .intro-float {
            position: absolute;
            width: 500px;
            right: 5%;
            bottom: 0;
          }

          .intro-title {
            color: var(--casper-blue);
            text-transform: uppercase;
            font-weight: 600;
          }

          .intro-pretitle {
            color: #3e3b3b;
            font-weight: 300;
            text-transform: uppercase;
            font-size: 1.2rem;
          }

          .intro-subtitle {
            color: #3e3b3b;
            font-weight: 300;
            text-transform: uppercase;
          }
        `}
      </style>
    </div>
  )
}
