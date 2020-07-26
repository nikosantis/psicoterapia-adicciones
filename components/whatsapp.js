import { useCallback } from 'react'
import { useModal } from './use-modal'
import { FaWhatsapp } from 'react-icons/fa'
import OpenWhatsApp from './openWhatsapp'

export default function WhatsApp () {
  const { active, open, close } = useModal()

  const handleOpen = useCallback(
    () => {
      open()
    },
    [open]
  )

  const handleClose = useCallback(
    () => {
      close()
    },
    [close]
  )

  return (
    <div className='wsp' onClick={active ? handleClose : handleOpen}>
      <div className='wsp-box'>
        <FaWhatsapp color='#fff' />
      </div>

      <OpenWhatsApp active={active} handleClose={handleClose} />
      <style jsx>
        {`
          .wsp {
            z-index: 2;
            position: fixed;
            bottom: 30px;
            left: 30px;
            padding: 1rem;
            background: var(--casper-color-wsp);
            border-radius: 30px;
            box-shadow: var(--shadow-smallest);
            cursor: pointer;
          }
          .wsp-box {
            display: flex;
          }
        `}
      </style>
    </div>
  )
}
