'use client'

import { useFreshRef } from '@/components/_shared/hooks/use-fresh-ref'
import { noop } from '@renderui/utils/noop'
import React from 'react'

// MediaQueryList Event based useEventListener interface
function useEventListener<K extends keyof MediaQueryListEventMap>(props: {
  event: K
  handler: (event: MediaQueryListEventMap[K]) => void
  element: MediaQueryList
  options?: boolean | AddEventListenerOptions
}): void

// Window Event based useEventListener interface
function useEventListener<K extends keyof WindowEventMap>(props: {
  event: K
  handler: (event: WindowEventMap[K]) => void
  element?: undefined
  options?: boolean | AddEventListenerOptions
}): void

// Element Event based useEventListener interface
function useEventListener<
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement = HTMLDivElement,
>(props: {
  event: K
  handler: (event: HTMLElementEventMap[K]) => void
  element: T | null
  options?: boolean | AddEventListenerOptions
}): void

// Document Event based useEventListener interface
function useEventListener<K extends keyof DocumentEventMap>(props: {
  event: K
  handler: (event: DocumentEventMap[K]) => void
  element: Document
  options?: boolean | AddEventListenerOptions
}): void

function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  KM extends keyof MediaQueryListEventMap,
  T extends HTMLElement | MediaQueryList | void = void,
>(props: {
  event: KW | KH | KM
  element?: T
  options?: boolean | AddEventListenerOptions
  handler: (
    event: WindowEventMap[KW] | HTMLElementEventMap[KH] | MediaQueryListEventMap[KM] | Event,
  ) => void
}) {
  const { event, element, options, handler } = props

  // Create a ref that stores handler
  const freshHandler = useFreshRef(handler)
  const freshOptions = useFreshRef(options)

  React.useEffect(() => {
    // Define the listening target
    const targetElement: T | HTMLElement | null =
      element ?? (typeof window !== 'undefined' ? window.document.documentElement : null)

    if (!(targetElement && targetElement.addEventListener)) return noop

    // Create event listener that calls handler function stored in ref
    const listener: typeof handler = (event) => freshHandler.current(event)

    targetElement.addEventListener(event, listener, freshOptions.current)

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(event, listener, freshOptions.current)
    }
  }, [event, element])
}

export { useEventListener }
