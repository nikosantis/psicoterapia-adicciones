import { createContext, useContext, useReducer } from 'react'

const CollapseContext = createContext()

const initialState = {
  open: 1
}

const OPEN = 'OPEN'

function collapseReducer (state, action) {
  switch (action.type) {

  }
}

function CollapseProvider (props) {
  const [state, dispatch] = useReducer(collapseReducer, initialState)
  return (
    <CollapseContext.Provider {...props} />
  )
}

function useCollapse () {
  const context = useContext(CollapseContext)
  if (context === undefined) {
    throw new Error('useCollapse must be used within a CollapseProvider')
  }
  return context
}

export { CollapseProvider, useCollapse }
