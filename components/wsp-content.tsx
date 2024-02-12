import Alert from './form/alert'
import Email from './form/email'
import Name from './form/name'
import Phone from './form/phone'
import Profession from './form/profession'
import SubmitButton from './form/submit-button'
import WspFormSubmit from './form/wsp-form-submit'
import WspProvider from './form/wsp-provider'

export default function WspContent() {
  return (
    <WspProvider>
      <WspFormSubmit>
        <div className='flex flex-col'>
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

          <div className='w-full'>
            <SubmitButton />
          </div>

          <Alert />
        </div>
      </WspFormSubmit>
    </WspProvider>
  )
}
