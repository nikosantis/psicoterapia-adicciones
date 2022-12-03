import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useContext
} from 'react'

interface MobileContext {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const MobileContext = createContext<MobileContext>({} as MobileContext)

type MobileProviderProps = {
  children: ReactNode
}

export function MobileProvider({ children }: MobileProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MobileContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MobileContext.Provider>
  )
}

export function useMobile() {
  const context = useContext(MobileContext)
  if (typeof context === 'undefined') {
    throw new Error('useMobile must be used within a MobileProvider')
  }
  return context
}
