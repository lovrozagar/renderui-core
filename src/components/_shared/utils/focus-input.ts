'use client'

import type React from 'react'

function focusInput(inputRef: React.RefObject<HTMLInputElement | null>) {
	if (!inputRef?.current) return

	const { current: input } = inputRef

	input.focus()

	const valueLength = input.value.length

	input.setSelectionRange(valueLength, valueLength)
}

export { focusInput }
