import React from 'react'

import { RippleRipple } from '@/components/ripple/types/ripple-ripple'

function usePressRipple(
  setRipples: React.Dispatch<React.SetStateAction<RippleRipple[]>>,
  isDisabled: boolean | undefined = undefined,
) {
  const [isRaised, setIsRaised] = React.useState(false)

  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined = undefined

    if (isDisabled) {
      timeoutId = setTimeout(() => setIsRaised(true), 0)
    } else {
      setIsRaised(false)
    }

    return () => clearTimeout(timeoutId)
  }, [isDisabled])

  return React.useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (isRaised) return ''

      const { currentTarget: trigger, clientX, clientY } = event
      const rect = trigger.getBoundingClientRect()
      const size = Math.max(trigger.clientWidth, trigger.clientHeight)

      const rippleKey = crypto.randomUUID()

      setRipples((previousRipples) => [
        ...previousRipples,
        {
          key: rippleKey,
          size,
          x: clientX - rect.x - size / 2,
          y: clientY - rect.y - size / 2,
        },
      ])

      return rippleKey
    },
    [isRaised, setRipples],
  )
}

export { usePressRipple }
