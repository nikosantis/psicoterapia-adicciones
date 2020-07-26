import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const isClient = typeof window !== 'undefined'

export default function Portal ({ id, children, container }) {
  useEffect(() => {
    renderContainer()
    return () => unrenderContainer()
  })

  let rootElement

  if (isClient) {
    rootElement = document.createElement('div')
  }

  function renderContainer () {
    getContainer(container).appendChild(rootElement)

    if (id) {
      rootElement.id = id
    }
  }

  function unrenderContainer () {
    getContainer(container).removeChild(rootElement)
  }

  if (!isClient) {
    return null
  }

  return createPortal(children, rootElement)
}

function getContainer (container) {
  return container || document.body
}
