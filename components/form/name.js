import * as yup from 'yup'
import { useFormState, useFormDispatch } from '../../lib/context-form'

const schema = yup.object().shape({
  name: yup.string().required().min(5).max(30)
})

function validInput (name) {
  const valid = schema.isValidSync({
    name
  })

  return valid
}
export default function Name () {
  const { name } = useFormState()
  const { setValue } = useFormDispatch()
  return (
    <>
      <label htmlFor='nombre'>Nombre y Apellido *</label>
      <input
        type='text'
        className={
          `form-control${name.length === 0 ? '' : validInput(name) ? ' is-valid' : ' is-invalid'}`
        }
        id='nombre'
        placeholder='Nombre'
        name='name'
        value={name}
        onChange={(evt) => setValue(evt.target.name, evt.target.value)}
      />
      <div className='invalid-feedback'>
        Ingrese Nombre y Apellido
      </div>
    </>
  )
}
