import { useEffect, memo, useState } from 'react'
import * as yup from 'yup'

import { useFormState } from 'lib/context-form'
import Button from './button'
import { StateType } from './use-form'

const schema = yup.object().shape({
  name: yup.string().required().min(3),
  profession: yup.string().required().min(3),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  comment: yup.string()
})

function validForm(state: StateType) {
  const valid = schema.isValidSync({
    name: state.name,
    profession: state.profession,
    email: state.email,
    phone: state.phone,
    comment: state.comment
  })

  return valid
}

function ValidForm() {
  const state = useFormState()
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    if (validForm(state) === true) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }, [state])

  return (
    <Button disabled={!isValid} loading={state.loading}>
      Enviar
    </Button>
  )
}

export default memo(ValidForm)
