import * as yup from 'yup'
import { useFormState, useFormDispatch } from '../../lib/context-form'

const schema = yup.object().shape({
  phone: yup.string().required().min(9).max(9).matches(/^[0-9]{0,9}/gm)
})

function validInput (phone) {
  const valid = schema.isValidSync({
    phone
  })

  return valid
}

export default function Phone () {
  const { phone } = useFormState()
  const { setValue } = useFormDispatch()
  return (
    <>
      <label htmlFor='celular'>Celular *</label>
      <input
        type='text'
        className={
          `form-control${phone.length === 0 ? '' : validInput(phone) ? ' is-valid' : ' is-invalid'}`
        }
        id='celular'
        placeholder='9 1234 5678'
        name='phone'
        value={phone}
        onChange={(evt) => setValue(evt.target.name, evt.target.value)}
      />
      <div className='invalid-feedback'>
        Ingresa 9 dígitos (ej: 987654321)
      </div>
    </>
  )
}
