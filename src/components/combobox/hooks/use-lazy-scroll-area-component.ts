import React from 'react'

import { ComboboxContentProps } from '@/components/combobox/types/combobox-content'
import { ScrollArea } from '@/components/scroll-area'

function useLazyScrollAreaComponent(hasScroll: ComboboxContentProps['hasScroll']) {
  const [ScrollAreaComponent, setScrollComponent] = React.useState<typeof ScrollArea | null>(null)

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
