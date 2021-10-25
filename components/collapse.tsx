import { ReactNode, useState } from 'react'
import { Transition, TransitionStatus } from 'react-transition-group'

const duration = 350

function getClass(state: TransitionStatus) {
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

type Props = {
  isOpen: boolean
  children: ReactNode
}

export default function Collapse({ isOpen, children }: Props) {
  const [height, setHeight] = useState<number | undefined>(undefined)

  function onEntering(node: HTMLElement) {
    setHeight(node.scrollHeight)
  }

  function onEntered() {
    setHeight(undefined)
  }

  function onExit(node: HTMLElement) {
    setHeight(node.scrollHeight)
  }

  function onExiting() {
    setHeight(0)
  }

  function onExited() {
    setHeight(undefined)
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
        <div className={`${getClass(state)} navbar-collapse`} style={{ height }}>
          {children}
        </div>
      )}
    </Transition>
  )
}
