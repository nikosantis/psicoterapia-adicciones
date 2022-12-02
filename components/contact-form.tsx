import Name from './form/name'
import Profession from './form/profession'
import Email from './form/email'
import Phone from './form/phone'
import Comments from './form/comments'
import SubmitButton from './form/submit-button'
import FormSubmit from './form/form-submit'
import Alert from './form/alert'

export default function ContactForm() {
  return (
    <FormSubmit>
      <div className='flex flex-wrap'>
        <div className='mb-1 block w-full lg:w-6/12 lg:pr-3'>
          <Name />
        </div>

        <div className='mb-1 block w-full lg:w-6/12 lg:pl-3'>
          <Profession />
        </div>

        <div className='mb-1 block w-full lg:w-6/12 lg:pr-3'>
          <Email />
        </div>

        <div className='mb-1 block w-full lg:w-6/12 lg:pl-3'>
          <Phone />
        </div>

        <div className='mb-4 w-full'>
          <Comments />
        </div>

        <div className='w-full'>
          <SubmitButton />
        </div>

        <Alert />
      </div>
    </FormSubmit>
  )
}
