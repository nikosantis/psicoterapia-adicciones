import * as yup from 'yup'
import { useFormState, useFormDispatch } from '../../lib/context-form'

const schema = yup.object().shape({
  profession: yup.string().required().min(5).max(20)
})

function validInput (profession) {
  const valid = schema.isValidSync({
    profession
  })

  return valid
}

export default function Profession () {
  const { profession } = useFormState()
  const { setValue } = useFormDispatch()
  return (
    <>
      <label htmlFor='profession'>Profesión *</label>
      <input
        type='text'
        className={
          `form-control${profession.length === 0 ? '' : validInput(profession) ? ' is-valid' : ' is-invalid'}`
        }
        id='profession'
        placeholder='Profesión'
        name='profession'
        value={profession}
        onChange={(evt) => setValue(evt.target.name, evt.target.value)}
      />
      <div className='invalid-feedback'>
        Profesión mínimo 5 caracteres
      </div>
    </>
  )
}
