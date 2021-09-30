import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Link as LinkScroll } from 'react-scroll'

import Collapse from './collapse'
import logoImg from 'public/images/fcm-logo.png'

export default function Navbar() {
  const [collapsed, setCollapsed] = useState(false)

  function handleClick() {
    setCollapsed(collapsed => !collapsed)
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <Link href='/'>
          <a className='navbar-brand'>
            <Image
              src={logoImg}
              alt='Facultad de Ciencias Médicas | Universidad de Santiago de Chile'
              priority
            />
          </a>
        </Link>
        <button
          className={`navbar-toggler${collapsed ? ' collapsed' : ''}`}
          type='button'
          data-toggle='collapse'
          aria-expanded={collapsed.toString()}
          aria-label='Toggle navigation'
          onClick={handleClick}
        >
          <span className='navbar-toggler-icon' />
        </button>

        <Collapse isOpen={collapsed}>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <LinkScroll
                className='nav-link'
                to='hero'
                spy
                smooth
                duration={500}
                activeClass='active'
              >
                Inicio <span className='sr-only'>(current)</span>
              </LinkScroll>
            </li>
            <li className='nav-item'>
              <LinkScroll
                className='nav-link'
                to='intro'
                spy
                smooth
                duration={500}
                activeClass='active'
              >
                Sobre el Diplomado
              </LinkScroll>
            </li>
            <li className='nav-item'>
              <LinkScroll
                className='nav-link'
                to='modules'
                spy
                smooth
                duration={500}
                activeClass='active'
              >
                Modulos
              </LinkScroll>
            </li>
            <li className='nav-item'>
              <LinkScroll
                className='nav-link'
                to='docentes'
                spy
                smooth
                duration={500}
                activeClass='active'
              >
                Docentes
              </LinkScroll>
            </li>
            <li className='nav-item'>
              <LinkScroll
                className='nav-link'
                to='contact'
                spy
                smooth
                duration={500}
                activeClass='active'
              >
                Contacto
              </LinkScroll>
            </li>
          </ul>
        </Collapse>
      </div>

      <style jsx>
        {`
          .navbar-brand {
            width: 200px;
          }

          @media (min-width: 992px) {
            .navbar-brand {
              width: 300px;
            }
          }
        `}
      </style>
    </nav>
  )
}
