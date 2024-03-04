/* eslint-disable react/hook-use-state */
import React from 'react'

import { ComboboxContentProps } from '@/components/combobox/types/combobox-content'

function useLazyScrollAreaComponent(hasScroll: ComboboxContentProps['hasScroll']) {
  const [ScrollAreaComponent, setScrollComponent] = React.useState(null)

  React.useEffect(() => {
    const loadComponent = async () => {
      const { ScrollArea } = await import('@/components/scroll-area')

      setScrollComponent(ScrollArea)
    }

    loadComponent()
  }, [hasScroll])

  return ScrollAreaComponent
}

export { useLazyScrollAreaComponent }
