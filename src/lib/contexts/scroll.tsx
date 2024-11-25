'use client'

import {
  ReactNode,
  RefObject,
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react'

interface ScrollContext {
  homeRef: RefObject<HTMLElement>
  aboutRef: RefObject<HTMLElement>
  modulesRef: RefObject<HTMLElement>
  teachersRef: RefObject<HTMLElement>
  contactRef: RefObject<HTMLElement>
  pricesRef: RefObject<HTMLElement>
  handleScrollTo: (scrollTo: SectionScroll) => void
  sectionActive: SectionScroll
}

const ScrollContext = createContext<ScrollContext>({} as ScrollContext)

export type SectionScroll =
  | 'home'
  | 'about'
  | 'modules'
  | 'teachers'
  | 'contact'
  | 'prices'

type ScrollProviderProps = {
  children: ReactNode
}

export function ScrollProvider({ children }: ScrollProviderProps) {
  const [sectionActive, setSection] = useState<SectionScroll>('home')

  const homeRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const modulesRef = useRef<HTMLElement>(null)
  const teachersRef = useRef<HTMLElement>(null)
  const pricesRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const handleScrollTo = useCallback((scrollTo: SectionScroll) => {
    const scrollToRefs: Record<SectionScroll, RefObject<HTMLElement>> = {
      home: homeRef,
      about: aboutRef,
      modules: modulesRef,
      teachers: teachersRef,
      contact: contactRef,
      prices: pricesRef,
    }
    const scrollToRef = scrollToRefs[scrollTo]
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({
        behavior: 'smooth',
      })
      setSection(scrollTo)
    }
  }, [])

  return (
    <ScrollContext.Provider
      value={{
        homeRef,
        aboutRef,
        modulesRef,
        teachersRef,
        contactRef,
        pricesRef,
        handleScrollTo,
        sectionActive,
      }}
    >
      {children}
    </ScrollContext.Provider>
  )
}

export function useScroll() {
  const context = useContext(ScrollContext)
  if (typeof context === 'undefined') {
    throw new Error('useScroll must be used within a ScrollProvider')
  }
  return context
}
