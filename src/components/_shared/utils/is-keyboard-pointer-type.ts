'use client'

import { PressEvent } from 'react-aria'

function isKeyboardPointerType(event: PressEvent) {
  return event.pointerType === 'keyboard'
}

export { isKeyboardPointerType }
