import { useReducer, useCallback } from 'react'

export type StateType = {
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

const initialState: StateType = {
  name: '',
  profession: '',
  email: '',
  phone: '',
  comment: '',
  loading: false,
  success: false,
  msg: '',
  error: ''
}

export type ActionType =
  | {
      type: 'SET_VALUE'
      payload: {
        field: string
        value: string
      }
    }
  | { type: 'RESET' }

const SET_VALUE = 'SET_VALUE'
const RESET = 'RESET'

function formReducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case SET_VALUE: {
      return {
        ...state,
        [action.payload.field]: action.payload.value
      }
    }
    case RESET: {
      return {
        ...initialState
      }
    }
    default: {
      throw new Error('Unhandled action type')
    }
  }
}

export function useForm() {
  const [state, dispatch] = useReducer(formReducer, initialState)

  const setValue = useCallback((field, value) => {
    dispatch({
      type: SET_VALUE,
      payload: {
        field,
        value
      }
    })
  }, [])

  const reset = useCallback(() => {
    dispatch({
      type: RESET
    })
  }, [])

  return { state, setValue, reset }
}
