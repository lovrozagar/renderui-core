'use client'

import type { PressEvent } from 'react-aria'

function isKeyboardPointerType(event: PressEvent) {
	return event.pointerType === 'keyboard'
}

export { isKeyboardPointerType }
