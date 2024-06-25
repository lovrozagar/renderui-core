'use client'

import { ITEM_CLASSNAME } from '@/components/combobox/constants/constants'

function getNextOrPreviousItem(activeItem: Element, direction: 'next' | 'prev') {
  if (!document) return

  const items = Array.from(document.querySelectorAll(ITEM_CLASSNAME))
  const activeIndex = items.indexOf(activeItem)
  const lastIndex = items.length - 1

  if (direction === 'next') {
    const nextIndex = activeIndex >= lastIndex ? 0 : activeIndex + 1

    return items.at(nextIndex)
  }

  const previousIndex = activeIndex <= 0 ? lastIndex : activeIndex - 1

  return items.at(previousIndex)
}

export { getNextOrPreviousItem }
