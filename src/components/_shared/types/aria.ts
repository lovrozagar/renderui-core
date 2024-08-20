import type {
	AriaFocusRingProps,
	FocusProps,
	HoverProps,
	LongPressProps,
	PressEvent,
	PressProps,
} from 'react-aria'

type UseAriaHandlersProps = {
	isPressDisabled: PressProps['isDisabled'] | undefined
	isPressed: PressProps['isPressed'] | undefined
	preventFocusOnPress: PressProps['preventFocusOnPress'] | undefined
	allowTextSelectionOnPress: PressProps['allowTextSelectionOnPress'] | undefined
	shouldCancelOnPointerExit: PressProps['shouldCancelOnPointerExit'] | undefined
	onPress: PressProps['onPress'] | undefined
	onPressStart: PressProps['onPressStart'] | undefined
	onPressEnd: PressProps['onPressEnd'] | undefined
	onPressChange: PressProps['onPressChange'] | undefined
	onPressUp: PressProps['onPressUp'] | undefined
	onKeyboardPress: ((event: PressEvent) => void) | undefined
	onKeyboardPressStart: ((event: PressEvent) => void) | undefined
	onKeyboardPressEnd: ((event: PressEvent) => void) | undefined
	isLongPressDisabled: LongPressProps['isDisabled'] | undefined
	longPressTreshold: LongPressProps['threshold'] | undefined
	longPressAccessibilityDescription: LongPressProps['accessibilityDescription'] | undefined
	onLongPressStart: LongPressProps['onLongPressStart'] | undefined
	onLongPress: LongPressProps['onLongPress'] | undefined
	onLongPressEnd: LongPressProps['onLongPressEnd'] | undefined
	isFocusDisabled: FocusProps['isDisabled'] | undefined
	onFocus: FocusProps['onFocus'] | undefined
	onFocusChange: FocusProps['onFocusChange'] | undefined
	onBlur: FocusProps['onBlur'] | undefined
	isTextInput: AriaFocusRingProps['isTextInput'] | undefined
	isFocusWithin: AriaFocusRingProps['within'] | undefined
	isHoverDisabled: HoverProps['isDisabled'] | undefined
	onHoverStart: HoverProps['onHoverStart'] | undefined
	onHoverChange: HoverProps['onHoverChange'] | undefined
	onHoverEnd: HoverProps['onHoverEnd'] | undefined
	isUsingAriaPressProps?: boolean
	onDragStart: React.DragEventHandler | undefined
	onKeyDown: React.KeyboardEventHandler | undefined
	onKeyUp: React.KeyboardEventHandler | undefined
	onMouseDown: React.MouseEventHandler | undefined
	onPointerDown: React.PointerEventHandler | undefined
	onPointerEnter: React.PointerEventHandler | undefined
	onPointerLeave: React.PointerEventHandler | undefined
	onPointerUp: React.PointerEventHandler | undefined
}

type OptionalAriaProps = Partial<UseAriaHandlersProps>

export type { OptionalAriaProps, UseAriaHandlersProps }
