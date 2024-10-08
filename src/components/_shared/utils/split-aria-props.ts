'use client'

import type { UseAriaHandlersProps } from '@/components/_shared/types/aria'

type AriaHandlerPropsSelectorProps<T extends object> = T & Partial<UseAriaHandlersProps>

const splitAriaProps = <T extends object>(props: AriaHandlerPropsSelectorProps<T>) => {
	const {
		isPressDisabled,
		isPressed,
		preventFocusOnPress,
		allowTextSelectionOnPress,
		shouldCancelOnPointerExit,
		onPress,
		onPressStart,
		onPressEnd,
		onPressChange,
		onPressUp,
		onKeyboardPress,
		onKeyboardPressStart,
		onKeyboardPressEnd,
		isLongPressDisabled = true,
		longPressTreshold,
		longPressAccessibilityDescription,
		onLongPressStart,
		onLongPress,
		onLongPressEnd,
		isFocusDisabled,
		onFocus,
		onFocusChange,
		onBlur,
		isTextInput,
		isFocusWithin,
		isHoverDisabled,
		onHoverStart,
		onHoverChange,
		onHoverEnd,
		onDragStart,
		onKeyDown,
		onKeyUp,
		onMouseDown,
		onPointerDown,
		onPointerEnter,
		onPointerLeave,
		onPointerUp,
		...nonAriaProps
	} = props

	const ariaProps = {
		isPressDisabled,
		isPressed,
		preventFocusOnPress,
		allowTextSelectionOnPress,
		shouldCancelOnPointerExit,
		onPress,
		onPressStart,
		onPressEnd,
		onPressChange,
		onPressUp,
		onKeyboardPress,
		onKeyboardPressStart,
		onKeyboardPressEnd,
		isLongPressDisabled,
		longPressTreshold,
		longPressAccessibilityDescription,
		onLongPressStart,
		onLongPress,
		onLongPressEnd,
		isFocusDisabled,
		onFocus,
		onFocusChange,
		onBlur,
		isTextInput,
		isFocusWithin,
		isHoverDisabled,
		onHoverStart,
		onHoverChange,
		onHoverEnd,
		onDragStart,
		onKeyDown,
		onKeyUp,
		onMouseDown,
		onPointerDown,
		onPointerEnter,
		onPointerLeave,
		onPointerUp,
	}

	return {
		ariaProps,
		nonAriaProps,
	}
}

export { splitAriaProps }
