import * as yup from 'yup'
import { useFormState, useFormDispatch } from '../../lib/context-form'

const schema = yup.object().shape({
  email: yup.string().email().required()
})

function validInput(email: string) {
  const valid = schema.isValidSync({
    email
  })

  return valid
}

export default function Email() {
  const { email } = useFormState()
  const { setValue } = useFormDispatch()
  return (
    <>
      <label htmlFor='email'>Correo Eletrónico *</label>
      <input
        type='email'
        className={`form-control${
          email.length === 0 ? '' : validInput(email) ? ' is-valid' : ' is-invalid'
        }`}
        id='email'
        placeholder='ejemplo@email.cl'
        name='email'
        value={email}
        onChange={evt => setValue(evt.target.name, evt.target.value)}
      />
      <div className='invalid-feedback'>Ingresa correo electrónico válido</div>
    </>
  )
}
