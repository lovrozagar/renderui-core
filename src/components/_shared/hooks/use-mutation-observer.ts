'use client'

import React from 'react'
import { useFreshRef } from '@/components/_shared/hooks/use-fresh-ref'

function useMutationObserver<T extends HTMLElement>(
  node: T | null,
  callback: MutationCallback,
  options: MutationObserverInit,
) {
  const freshCallback = useFreshRef(callback)
  const freshOptions = useFreshRef(options)

  React.useEffect(() => {
    if (!node) return undefined

    const observer = new MutationObserver(freshCallback.current)

    observer.observe(node, freshOptions.current)

    return () => {
      observer.disconnect()
    }
  }, [node])
}

export { useMutationObserver }
