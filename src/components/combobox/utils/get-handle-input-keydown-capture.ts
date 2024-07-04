'use client'

import React from 'react'

import { ACTIVE_ITEM_CLASSNAME } from '@/components/combobox/constants/constants'

type GetHandleInputKeyDownCaptureArgs = {
  variant: 'select' | 'combobox'
  setOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>
  setLabel: React.Dispatch<React.SetStateAction<React.ReactNode | undefined>>
}

function getHandleInputKeyDownCapture(args: GetHandleInputKeyDownCaptureArgs) {
  const { variant, setOpen, setLabel, setValue } = args

  // If the variant is of type 'combobox', keep default functionality, space press adds space string to input
  if (variant === 'combobox') return undefined

  // if the variant is of type 'select', prevent default functionality, space press selects the active item
  return (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = event

    // @TODO inspect this
    // if (!ALLOWED_SELECT_KEYS.includes(key)) {
    //   event.preventDefault()
    // }

    if (key === ' ') {
      event.preventDefault()

      if (!document) return

      const activeItem = document.querySelector(ACTIVE_ITEM_CLASSNAME)

      if (!activeItem || !(activeItem instanceof HTMLElement)) return

      const activeItemValue = activeItem.dataset.inputValue ?? ''
      const activeItemLabel = activeItem.textContent ?? ''

      setValue(activeItemValue)
      setLabel(activeItemLabel)
      setOpen(false)
    }
  }
}

export { getHandleInputKeyDownCapture }
