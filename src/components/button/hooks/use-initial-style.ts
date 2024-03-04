import React from 'react'

const useInitialStyle = <T extends Element>(ref: React.RefObject<T>, dependency?: unknown) => {
  const [style, setStyle] = React.useState<string>()

  React.useEffect(() => {
    if (!ref?.current) return

    const initialStyle = getComputedStyle(ref.current).color

    setStyle(initialStyle)
  }, [ref, dependency])

  return style
}

export { useInitialStyle }
