import Comments from './form/comments'
import Email from './form/email'
import FormSubmit from './form/form-submit'
import Name from './form/name'
import Phone from './form/phone'
import Profession from './form/profession'

export default function ContactForm() {
  return (
    <FormSubmit>
      <div className='flex w-full flex-col gap-x-3 gap-y-4 lg:flex-row'>
        <div className='block w-full lg:w-6/12 lg:pr-3'>
          <Name />
        </div>

        <div className='block w-full lg:w-6/12 lg:pl-3'>
          <Profession />
        </div>
      </div>

      <div className='flex w-full flex-col gap-x-3 gap-y-4 lg:flex-row'>
        <div className='block w-full lg:w-6/12 lg:pr-3'>
          <Email />
        </div>

        <div className='block w-full lg:w-6/12 lg:pl-3'>
          <Phone />
        </div>
      </div>

      <div className='w-full'>
        <Comments />
      </div>
    </FormSubmit>
  )
}
