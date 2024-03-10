'use client'

import { ONE, ZERO } from '@renderui/constants'

import { ITEM_CLASSNAME } from '@/components/combobox/constants/constants'

function getNextOrPreviousItem(activeItem: Element, direction: 'next' | 'prev') {
  if (!document) return

  const items = Array.from(document.querySelectorAll(ITEM_CLASSNAME))
  const activeIndex = items.indexOf(activeItem)
  const lastIndex = items.length - ONE

  if (direction === 'next') {
    const nextIndex = activeIndex >= lastIndex ? ZERO : activeIndex + ONE

    return items.at(nextIndex)
  }

  const previousIndex = activeIndex <= ZERO ? lastIndex : activeIndex - ONE

  return items.at(previousIndex)
}

export { getNextOrPreviousItem }
