'use client'

import { useEventListener } from '@/components/_shared/hooks/use-event-listener'
import { RefObject } from 'react'

const DEFAULT_EXCEPTION_SELECTORS: string[] = []

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  eventType: 'mousedown' | 'mouseup' | 'pointerdown' | 'pointerup' = 'pointerdown',
  ref: RefObject<T>,
  handler: (event: MouseEvent) => void,
  exceptionSelectors: string[] = DEFAULT_EXCEPTION_SELECTORS,
) {
  useEventListener(eventType, (event) => {
    const element = ref?.current

    if (!element || element.contains(event.target as Node)) {
      return
    }

    for (const selector of exceptionSelectors) {
      if ((event.target as Element).matches(selector)) {
        return
      }
    }

    handler(event)
  })
}

export { useOnClickOutside }
