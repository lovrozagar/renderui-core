import React from 'react'

import { focusInput } from '@/components/_shared/utils/focus-input'
import { CLEAR_TOGGLE_TIMEOUT } from '@/components/text-input/constants/constants'
import type { TextInputProps, TextInputRef } from '@/components/text-input/types/text-input'

type UseInputActionsArgs = {
	type: TextInputProps['type']
	onClear: TextInputProps['onClear']
	setValue: React.Dispatch<React.SetStateAction<string>>
}

const useInputActions = (args: UseInputActionsArgs, inputRef: React.RefObject<TextInputRef>) => {
	const { type, onClear, setValue } = args

	const originalNonPasswordType = React.useRef(!type || type === 'password' ? 'text' : type)

	const [inputType, setInputType] = React.useState(type ?? 'text')

	const clickTimeout = React.useRef<NodeJS.Timeout | null>(null)

	const focusInputOnClickTimeout = () => {
		if (clickTimeout.current) {
			clearTimeout(clickTimeout.current)
			clickTimeout.current = null
		}

		clickTimeout.current = setTimeout(() => {
			if (inputRef.current) focusInput(inputRef)
		}, CLEAR_TOGGLE_TIMEOUT)
	}

	const handleInputFocusOnContainerClick = () => {
		if (inputRef.current) focusInput(inputRef)
	}

	const handleClear = () => {
		setValue('')

		if (inputRef.current) focusInputOnClickTimeout()

		if (onClear) onClear()
	}

	const handlePasswordToggle = () => {
		setInputType((previousType) => {
			if (previousType === 'password') {
				return originalNonPasswordType.current
			}

			return 'password'
		})

		if (inputRef.current) focusInputOnClickTimeout()
	}

	const clearTimeouts = () => {
		if (clickTimeout.current) {
			clearTimeout(clickTimeout.current)
			clickTimeout.current = null
		}
	}

	return {
		inputType,
		handleClear,
		clearTimeouts,
		handleInputFocusOnContainerClick,
		handlePasswordToggle,
	}
}

export { useInputActions }
