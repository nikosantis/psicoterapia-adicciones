import { createContext, useContext } from 'react'
import { useForm } from '../components/use-form'

const FormStateContext = createContext()
const FormDispatchContext = createContext()

function FormProvider(props) {
  const { state, setValue, reset } = useForm()

  return (
    <FormStateContext.Provider value={state}>
      <FormDispatchContext.Provider value={{ setValue, reset }} {...props} />
    </FormStateContext.Provider>
  )
}

function useFormState() {
  const formState = useContext(FormStateContext)
  if (typeof formState === 'undefined') {
    throw new Error('useFormState must be used within a FormProvider')
  }
  return formState
}

function useFormDispatch() {
  const formDispatch = useContext(FormDispatchContext)
  if (typeof formDispatch === 'undefined') {
    throw new Error('useFormDispatch must be used within a FormProvider')
  }
  return formDispatch
}

export { FormProvider, useFormState, useFormDispatch }
