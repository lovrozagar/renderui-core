'use client'

import React from 'react'

function useFreshRef<T>(value: T) {
  const ref = React.useRef(value)

  React.useEffect(() => {
    ref.current = value
  }, [value])

  return ref
}

export { useFreshRef }
