'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react'

export type FormState = {
  status: 'idle' | 'loading' | 'success' | 'error' | 'exist'
  error: string | null
  isFormValid: boolean
  form: 'wsp' | 'contact'
}

type ActionType =
  | { type: 'START' }
  | { type: 'SUCCESS' }
  | { type: 'ERROR'; payload: string }
  | { type: 'EXIST' }
  | { type: 'VALIDATE'; payload: boolean }
  | { type: 'RESET' }

const initialState: FormState = {
  status: 'idle',
  error: null,
  isFormValid: false,
  form: 'contact',
}

function reducer(state: FormState, action: ActionType): FormState {
  switch (action.type) {
    case 'VALIDATE':
      return {
        ...state,
        isFormValid: action.payload,
      }
    case 'START':
      return {
        ...state,
        error: null,
        status: 'loading',
      }
    case 'SUCCESS':
      return {
        ...state,
        error: null,
        status: 'success',
      }
    case 'ERROR':
      return {
        ...state,
        error: action.payload,
        status: 'error',
      }
    case 'EXIST':
      return {
        ...state,
        status: 'exist',
      }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

export interface FormStateContext {
  state: FormState
}

export const FormStateContext = createContext<FormStateContext | null>(null)

export interface FormDispatchContext {
  validate: (payload: boolean) => void
  start: () => void
  success: () => void
  reset: () => void
  exist: () => void
  error: (message: string) => void
}

export const FormDispatchContext = createContext<FormDispatchContext | null>(
  null,
)

export function FormProvider({
  children,
  form,
}: {
  children: React.ReactNode
  form: 'wsp' | 'contact'
}) {
  const [state, dispatch] = useReducer(reducer, initialState, () => ({
    ...initialState,
    form,
  }))
  const start = useCallback(() => dispatch({ type: 'START' }), [])
  const validate = useCallback(
    (payload: boolean) => dispatch({ type: 'VALIDATE', payload }),
    [],
  )
  const success = useCallback(() => dispatch({ type: 'SUCCESS' }), [])
  const reset = useCallback(() => dispatch({ type: 'RESET' }), [])
  const exist = useCallback(() => dispatch({ type: 'EXIST' }), [])
  const error = useCallback(
    (message: string) => dispatch({ type: 'ERROR', payload: message }),
    [],
  )

  const dispatchValues: FormDispatchContext = useMemo(
    () => ({
      validate,
      start,
      success,
      reset,
      exist,
      error,
    }),
    [validate, start, success, reset, exist, error],
  )
  return (
    <FormStateContext.Provider
      value={{
        state,
      }}
    >
      <FormDispatchContext.Provider value={dispatchValues}>
        {children}
      </FormDispatchContext.Provider>
    </FormStateContext.Provider>
  )
}

export function useFormStateContext() {
  const context = useContext(FormStateContext)
  if (!context) {
    throw new Error('useFormStateContext must be used within a FormProvider')
  }
  return context
}

export function useFormDispatchContext() {
  const context = useContext(FormDispatchContext)
  if (!context) {
    throw new Error('useFormDispatchContext must be used within a FormProvider')
  }
  return context
}
