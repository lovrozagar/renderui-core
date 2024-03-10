'use client'

import { ZERO } from '@renderui/constants'

import { ACTIVE_ITEM_CLASSNAME } from '@/components/combobox/constants/constants'
import { getNextOrPreviousItem } from '@/components/combobox/utils/get-next-or-previous-item'

type GetHandleKeyDownCaptureArgs = {
  open: boolean | undefined
  value: string | undefined
  timeoutIdRef: React.MutableRefObject<NodeJS.Timeout | null>
  setOpen: (open: boolean) => void
  setFocusValue: (value: string) => void
}

function getHandleKeyDownCapture(props: GetHandleKeyDownCaptureArgs) {
  const { open, value, timeoutIdRef, setOpen, setFocusValue } = props

  return (event: React.KeyboardEvent) => {
    if ((event.key === 'ArrowDown' || event.key === 'ArrowUp') && !open) {
      setOpen(true)
    }

    const canNextItemBeSet = !open && value

    if (!canNextItemBeSet) return

    timeoutIdRef.current = setTimeout(() => {
      if (!(event.key === 'ArrowDown' || event.key === 'ArrowUp' || !document)) return

      const activeItem = document.querySelector(ACTIVE_ITEM_CLASSNAME)

      if (!activeItem) return

      const direction = event.key === 'ArrowDown' ? 'next' : 'prev'
      const newItem = getNextOrPreviousItem(activeItem, direction)

      if (newItem && newItem instanceof HTMLElement) {
        const newItemValue = newItem.dataset.value

        if (!newItemValue) return

        setFocusValue(newItemValue)
      }
    }, ZERO)
  }
}

export { getHandleKeyDownCapture }
