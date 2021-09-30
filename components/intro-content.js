import { FiEdit, FiClock, FiCalendar } from 'react-icons/fi'
import { MdLaptopMac } from 'react-icons/md'

export default function IntroContent() {
  return (
    <div className='row mt-5 justify-content-center'>
      <div className='col-lg-3 col-md-3 col-10 mb-5 mb-lg-0'>
        <div className='box'>
          <div className='box-icon'>
            <div className='icon'>
              <FiEdit fontSize='30' color='#fff' />
            </div>
          </div>
          <div className='box-title'>
            <h3>Duración</h3>
          </div>

          <div className='box-text'>180 horas</div>
        </div>
      </div>

      <div className='col-lg-3 col-md-3 col-10 mb-5 mb-lg-0'>
        <div className='box'>
          <div className='box-icon'>
            <div className='icon'>
              <FiClock fontSize='30' color='#fff' />
            </div>
          </div>
          <div className='box-title'>
            <h3>Horario de Clases</h3>
          </div>

          <div className='box-text'>Por definir</div>
        </div>
      </div>

      <div className='col-lg-3 col-md-3 col-10 mb-5 mb-lg-0'>
        <div className='box'>
          <div className='box-icon'>
            <div className='icon'>
              <MdLaptopMac fontSize='30' color='#fff' />
            </div>
          </div>
          <div className='box-title'>
            <h3>Modalidad</h3>
          </div>

          <div className='box-text'>Online</div>
        </div>
      </div>

      <div className='col-lg-3 col-md-3 col-10 mb-5 mb-lg-0'>
        <div className='box'>
          <div className='box-icon'>
            <div className='icon'>
              <FiCalendar fontSize='30' color='#fff' />
            </div>
          </div>
          <div className='box-title'>
            <h3>Inicio y Término de Clases</h3>
          </div>

          <div className='box-text'>Por definir</div>
        </div>
      </div>

      <style jsx>
        {`
          .box {
            display: flex;
            justify-content: center;
            flex-direction: column;
          }

          .box-icon {
            display: flex;
            justify-content: center;
            margin-bottom: 15px;
          }

          .icon {
            padding: 15px;
            background-color: var(--casper-orange);
            border-radius: 50%;
          }

          .box-title {
            text-align: center;
            margin-bottom: 15px;

            h3 {
              font-size: 1.2rem;
            }
          }

          .box-text {
            font-size: 1rem;
            text-align: center;
          }
        `}
      </style>
    </div>
  )
}
