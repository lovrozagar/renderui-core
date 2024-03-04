import { OrUndefined } from '@renderui/types'
import { mergeProps } from '@renderui/utils'
import React from 'react'
import {
  chain,
  FocusProps,
  FocusRingProps,
  HoverProps,
  LongPressProps,
  PressEvent,
  PressHookProps,
  useFocus,
  useFocusRing,
  useHover,
  useLongPress,
  usePress,
} from 'react-aria'

import { UseAriaHandlersProps } from '@/components/_shared/types/aria'
import { isKeyboardPointerType } from '@/components/_shared/utils/is-keyboard-pointer-type'

function useAriaHandlers<T extends HTMLElement>(
  props: OrUndefined<UseAriaHandlersProps>,
  ref: React.ForwardedRef<T | null> | undefined,
) {
  const {
    // PRESS
    isPressDisabled,
    isPressed: isPressedControlled,
    preventFocusOnPress,
    allowTextSelectionOnPress,
    shouldCancelOnPointerExit,
    onPress,
    onPressStart,
    onPressEnd,
    onPressChange,
    onPressUp,

    // KEYBOARD PRESS
    onKeyboardPressStart,
    onKeyboardPressEnd,
    onKeyboardPress,

    // LONG PRESS
    isLongPressDisabled,
    longPressTreshold,
    longPressAccessibilityDescription,
    onLongPressStart,
    onLongPress,
    onLongPressEnd,

    // FOCUS
    isFocusDisabled,
    onFocus,
    onFocusChange,
    onBlur,

    // FOCUS WITHIN
    isTextInput,
    isFocusWithin,

    // HOVER
    isHoverDisabled,
    onHoverStart,
    onHoverChange,
    onHoverEnd,

    // NATIVE
    onDragStart,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onPointerDown,
    onPointerEnter,
    onPointerLeave,
    onPointerUp,

    isUsingAriaPressProps = true,
  } = props

  const [isKeyboardPressed, setIsKeyboardPressed] = React.useState(false)
  const [isLongPressed, setIsLongPressed] = React.useState(false)

  const handlePressStart = (event: PressEvent) => {
    if (isKeyboardPointerType(event)) setIsKeyboardPressed(true)
  }

  const handlePressEnd = (event: PressEvent) => {
    if (isKeyboardPointerType(event)) setIsKeyboardPressed(false)
  }

  const handleKeyboardPressStart = (event: PressEvent) => {
    if (isKeyboardPointerType(event) && onKeyboardPressStart) onKeyboardPressStart(event)
  }

  const handleKeyboardPressEnd = (event: PressEvent) => {
    if (isKeyboardPointerType(event) && onKeyboardPressEnd) onKeyboardPressEnd(event)
  }

  const handleKeyboardPress = (event: PressEvent) => {
    if (isKeyboardPointerType(event) && onKeyboardPress) onKeyboardPress(event)
  }

  // hooks propeties are asserted due to the decision to keep exactOptionalPropertyTypes: true - TS rule

  const { pressProps, isPressed } = usePress({
    ref,
    isPressed: isPressedControlled,
    preventFocusOnPress,
    allowTextSelectionOnPress,
    shouldCancelOnPointerExit,
    isDisabled: isPressDisabled,
    onPressChange,
    onPressUp,
    onPress: chain(handleKeyboardPress, onPress),
    onPressStart: chain(handlePressStart, handleKeyboardPressStart, onPressStart),
    onPressEnd: chain(handlePressEnd, handleKeyboardPressEnd, onPressEnd),
  } as PressHookProps)

  const { longPressProps } = useLongPress({
    isDisabled: isLongPressDisabled,
    threshold: longPressTreshold,
    accessibilityDescription: longPressAccessibilityDescription,
    onLongPressStart: chain(onLongPressStart, () => setIsLongPressed(true)),
    onLongPress,
    onLongPressEnd,
  } as LongPressProps)

  const { focusProps } = useFocus({
    isDisabled: isFocusDisabled,
    onFocus,
    onBlur,
    onFocusChange,
  } as FocusProps)

  const {
    focusProps: focusVisibleProps,
    isFocusVisible,
    isFocused,
  } = useFocusRing({
    isTextInput,
    within: isFocusWithin,
  } as FocusRingProps)

  const { hoverProps, isHovered } = useHover({
    isDisabled: isHoverDisabled,
    onHoverStart,
    onHoverChange,
    onHoverEnd,
  } as HoverProps)

  const ariaHandlerProps = mergeProps(
    isLongPressDisabled ? undefined : longPressProps,
    isUsingAriaPressProps ? pressProps : undefined,
    focusProps,
    focusVisibleProps,
    hoverProps,
    {
      onPointerUp: chain(onPointerUp, () => setIsLongPressed(false)),
      onPointerLeave: chain(onPointerLeave, () => setIsLongPressed(false)),
      onDragStart,
      onKeyDown,
      onKeyUp,
      onMouseDown,
      onPointerDown,
      onPointerEnter,
    },
  )

  const accessibilityProps = {
    'aria-pressed': isPressed,
    'data-pressed': isPressed,
    'data-long-pressed': isLongPressed,
    'data-keyboard-pressed': isKeyboardPressed,
    'data-hover': isHovered,
    'data-focus-within': isFocusWithin ? isFocused : undefined,
    'data-focus': isFocusWithin ? undefined : isFocused,
    'data-focus-visible': isFocusVisible,
  }

  return {
    ariaComponentProps: {
      ...accessibilityProps,
      ...ariaHandlerProps,
    },
    ariaFlags: {
      isPressed,
      isKeyboardPressed,
      isFocused,
      isFocusVisible,
      isHovered,
    },
  }
}

export { useAriaHandlers }
