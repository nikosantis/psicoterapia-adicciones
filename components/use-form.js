import { useReducer, useCallback } from 'react'

const initialState = {
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

const SET_VALUE = 'SET_VALUE'
const RESET = 'RESET'

function formReducer(state, action) {
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
      throw new Error(`Unhandled action type: ${action.type}`)
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
