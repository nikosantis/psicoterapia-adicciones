import { createContext, ReactNode, useContext } from 'react'
import { useForm } from 'components/use-form'

interface FormStateContext {
  name: string
  profession: string
  email: string
  phone: string
  comment: string
  loading: boolean
  success: boolean
  msg: string
  error: string
}

interface FormDispatchContext {
  setValue: (field: any, value: any) => void
  reset: () => void
}

const FormStateContext = createContext<FormStateContext>({} as FormStateContext)
const FormDispatchContext = createContext<FormDispatchContext>({} as FormDispatchContext)

type Props = {
  children: ReactNode
}

function FormProvider(props: Props) {
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
