import Comments from './form/comments'
import Email from './form/email'
import FormSubmit from './form/form-submit'
import Name from './form/name'
import Phone from './form/phone'
import Profession from './form/profession'
import SubmitButton from './form/submit-button'

export default function ContactForm() {
  return (
    <FormSubmit>
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
    </FormSubmit>
  )
}
