import { useReducer, useCallback } from 'react'

const initialState = {}

const SET_VALUE = 'SET_VALUE'
const RESET = 'RESET'

function formReducer(state, action) {
  switch (action.type) {
    case SET_VALUE: {
      return {
        ...state,
        ...action.payload
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

export function useGSS() {
  const [dataState, dispatch] = useReducer(formReducer, initialState)

  const setGSS = useCallback(payload => {
    dispatch({
      type: SET_VALUE,
      payload
    })
  }, [])

  const resetGSS = useCallback(() => {
    dispatch({
      type: RESET
    })
  }, [])

  return { dataState, setGSS, resetGSS }
}
