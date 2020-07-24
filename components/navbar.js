export default function Navbar () {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          <img
            src='/images/fcm-logo.png'
            alt='Facultad de Ciencias Médicas | Universidad de Santiago de Chile'
            className='logo'
          />
        </a>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>Inicio <span className='sr-only'>(current)</span></a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Sobre el Diplomado</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Contacto</a>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>
        {`
          .logo {
            width: 200px;
          }

          @media (min-width: 992px) {
            .logo {
              width: 300px;
            }
          }
        `}
      </style>
    </nav>
  )
}
