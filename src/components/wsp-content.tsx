import Email from './form/email'
import Name from './form/name'
import Phone from './form/phone'
import Profession from './form/profession'
import WspFormSubmit from './form/wsp-form-submit'

export default function WspContent() {
  return (
    <WspFormSubmit>
      <div className='block w-full'>
        <Name />
      </div>

      <div className='block w-full'>
        <Profession />
      </div>

      <div className='block w-full'>
        <Email />
      </div>

      <div className='block w-full'>
        <Phone />
      </div>
    </WspFormSubmit>
  )
}
