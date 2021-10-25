import { useEffect, FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'

const isClient = typeof window !== 'undefined'

type Props = {
  container?: HTMLElement
  children: ReactNode
}

let rootElement: HTMLElement | null

const Portal = ({ container, children }: Props) => {
  useEffect(() => {
    if (container) {
      renderContainer()
      return () => unrenderContainer()
    }
  })

  if (!isClient) {
    return null
  }

  if (isClient) {
    rootElement = document.body
  }

  const renderContainer = (): void => {
    rootElement && getContainer(container).appendChild(rootElement)
  }

  const unrenderContainer = (): void => {
    rootElement && getContainer(container).removeChild(rootElement)
  }

  return window !== undefined && rootElement ? createPortal(children, rootElement) : null
}

const getContainer = (container?: HTMLElement): HTMLElement => {
  return container || document.body
}

export default Portal
