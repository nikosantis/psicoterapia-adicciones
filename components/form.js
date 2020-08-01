import { useFormState, useFormDispatch } from '../lib/context-form'
import ValidForm from './valid-form'
import Name from './form/name'
import Profession from './form/profession'
import Email from './form/email'
import Phone from './form/phone'
import Comment from './form/comment'
import { createEvent } from '../lib/tagmanager'

export default function Form () {
  const state = useFormState()
  const { setValue, reset } = useFormDispatch()

  async function handleSubmit (evt) {
    evt.preventDefault()
    setValue('error', '')
    setValue('msg', '')
    const inputs = {
      ...state
    }

    setValue('loading', true)
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...inputs })
    })

    const text = await res.json()

    if (res.status === 200) {
      setValue('loading', false)
      reset()
      setValue('msg', text.message)
      createEvent({
        event: 'submitOk'
      })
    } else {
      setValue('loading', false)
      setValue('error', text.error)
    }
  }

  return (
    <div className='contact-wrapper'>
      <form onSubmit={handleSubmit}>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <Name />
          </div>
          <div className='form-group col-md-6'>
            <Profession />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <Email />
          </div>
          <div className='form-group col-md-6'>
            <Phone />
          </div>
        </div>

        <div className='form-row'>
          <div className='form-group col-md-12'>
            <Comment />
          </div>
        </div>
        <small className='form-text text-muted mb-3'>* Requerido</small>

        <ValidForm />
      </form>

      {
        state.msg && (
          <div className='alert alert-success' role='alert'>
            {state.msg}
          </div>
        )
      }

      {
        state.msg && (
          <img
            height='1'
            width='1'
            style={{ display: 'none' }}
            src={`https://script.google.com/macros/s/AKfycbwKbM2fhOBeTne8TE7cAd1ymoY7scOGfcZkIlGyEecE7k6PMBJp/exec?NOMBRE_APELLIDO=${encodeURIComponent(state.name)}&PROFESION=${encodeURIComponent(state.profession)}&EMAIL=${encodeURIComponent(state.email)}&CELULAR=${encodeURIComponent(state.phone)}&MENSAJE=${encodeURIComponent(state.comment)}`}
            alt=''
          />
        )
      }

      {
        state.error && (
          <div className='alert alert-danger' role='alert'>
            {state.error}
          </div>
        )
      }

      <style jsx>
        {`
          .contact-wrapper {
            background-color: #f8f9fa;
            padding: 50px 30px;
            border-radius: 5px;
          }

          form {
            margin-bottom: 20px;
          }

          input::placeholder {
            color: #888888;
            opacity: 0.5;
            font-weight: 300;
            font-size: 0.875rem;
          }
        `}
      </style>
    </div>
  )
}
