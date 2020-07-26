import { useState, useCallback } from 'react'

export function useModal () {
  const [active, setActive] = useState(false)

  const open = useCallback(
    () => {
      setActive(true)
    },
    []
  )
  const close = useCallback(
    () => {
      setActive(false)
    },
    []
  )

  return {
    active,
    open,
    close
  }
}
