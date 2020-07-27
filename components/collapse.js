import { useState } from 'react'
import { Transition } from 'react-transition-group'

const duration = 350

function getClass (state) {
  switch (state) {
    case 'entered': {
      return 'collapse show'
    }
    case 'entering': {
      return 'collapsing'
    }
    case 'exited': {
      return 'collapse'
    }
    case 'exiting': {
      return 'collapsing'
    }
  }
}

export default function Collapse ({ isOpen, children }) {
  const [height, setHeight] = useState(null)

  function onEntering (node) {
    setHeight(node.scrollHeight)
  }

  function onEntered () {
    setHeight(null)
  }

  function onExit (node) {
    setHeight(node.scrollHeight)
  }

  function onExiting () {
    setHeight(0)
  }

  function onExited () {
    setHeight(null)
  }

  return (
    <Transition
      in={isOpen}
      timeout={duration}
      onEntering={onEntering}
      onExiting={onExiting}
      onEntered={onEntered}
      onExited={onExited}
      onExit={onExit}
    >
      {state => (
        <div
          className={`${getClass(state)} navbar-collapse`}
          style={{ height }}
        >
          {children}
        </div>
      )}
    </Transition>
  )
}
