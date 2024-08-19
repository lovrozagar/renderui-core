'use client'

import { useEventListener } from '@/components/_shared/hooks/use-event-listener'

const DEFAULT_EXCEPTION_SELECTORS: string[] = []

type UseOnClickOutsideProps<T extends HTMLElement = HTMLElement> = {
  element: T | null
  exceptionSelectors?: string[]
} & (
  | {
      event: 'mousedown' | 'mouseup'
      handler: ((event: MouseEvent) => void) | undefined
    }
  | {
      event: 'pointerdown' | 'pointerup'
      handler: ((event: PointerEvent) => void) | undefined
    }
)

function useOnClickOutside<T extends HTMLElement = HTMLElement>(props: UseOnClickOutsideProps<T>) {
  const { event, element, handler, exceptionSelectors = DEFAULT_EXCEPTION_SELECTORS } = props

  useEventListener({
    event,
    element: element,
    handler: (event) => {
      if (!handler || !element || element.contains(event.target as Node)) {
        return
      }

      for (const selector of exceptionSelectors) {
        if ((event.target as Element).matches(selector)) {
          return
        }
      }

      handler(event as PointerEvent)
    },
  })
}

export { useOnClickOutside }
