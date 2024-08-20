import { chain, cn, cx, functionCallOrValue, getOptionalObject } from '@renderui/utils'
import React from 'react'

import { inputContainerClasses } from '@/components/_shared/classes/input-container-classes'
import { useControllableState } from '@/components/_shared/hooks/use-controllable-state'
import { useMergedRef } from '@/components/_shared/hooks/use-merged-ref'
import { useOnClickOutside } from '@/components/_shared/hooks/use-on-click-outside'
import { focusInput } from '@/components/_shared/utils/focus-input'
import {
	DEFAULT_NUMBER_INPUT_CLASSNAME,
	DEFAULT_NUMBER_INPUT_CONTAINER_CLASSNAME,
	DEFAULT_NUMBER_INPUT_DECREMENT_BUTTON_CLASSNAME,
	DEFAULT_NUMBER_INPUT_INCREMENT_BUTTON_CLASSNAME,
	DFEAULT_NUMBER_INPUT_SPIN_BUTTON_CONTAINER_CLASSNAME,
	SEPARATOR_OUTLINE_CLASSNAME,
} from '@/components/number-input/constants/constants'
import { useNumberSpin } from '@/components/number-input/hooks/use-number-spin'
import { getOnChange } from '@/components/number-input/hooks/use-on-change'
import { NumberInputProps } from '@/components/number-input/types/number-input'
import { getHandleKeyPressCapture } from '@/components/number-input/utils/get-handle-key-press-capture'

function useNumberInput(props: NumberInputProps) {
	const {
		ref,
		min,
		max,
		pattern,
		className,
		children,
		startContent,
		endContent,
		isDisabled,
		isReadOnly,
		isInvalid,
		isRequired,
		inputContainerProps,
		spinButtonContainerProps,
		incrementButtonProps,
		decrementButtonProps,
		separatorProps,
		onClick,
		onMouseDown,
		onKeyDownCapture,
		onValueChange,
		onPointerDown,
		onChange: nativeOnChange,
		onSpin,
		onSpinIncrement,
		onSpinDecrement,
		value: valueProp,
		step = '1',
		size = 'md',
		variant = 'solid',
		defaultValue = '',
		hasSpinButtons = true,
		...restProps
	} = props

	const [value, setValue] = useControllableState<string | undefined>({
		prop: valueProp as string,
		defaultProp: defaultValue as string,
		onChange: onValueChange,
	})

	const internalInputRef = React.useRef<HTMLInputElement>(null)
	const mergedRefCallback = useMergedRef<HTMLInputElement>([internalInputRef, ref])

	const {
		increment,
		incrementWithVariableSpeed,
		decrement,
		decrementWithVariableSpeed,
		stopIncrementing,
		stopDecrementing,
		clearIntervals,
	} = useNumberSpin(
		{
			value,
			min,
			max,
			step,
			pattern,
			setValue,
			onSpin,
			onSpinIncrement,
			onSpinDecrement,
		},
		internalInputRef,
	)

	useOnClickOutside({
		event: 'pointerdown',
		element: internalInputRef.current,
		handler: clearIntervals,
	})

	const {
		className: inputContainerClassName,
		onPointerDown: inputContainerOnPointerDown,
		onClick: inputContainerOnClick,
		isTextInput = true,
		isFocusWithin = true,
		isUsingAriaPressProps = false,
		...restInputContainerProps
	} = getOptionalObject(inputContainerProps)

	const { className: spinButtonContainerClassName, ...restSpinButtonContainerClassName } =
		getOptionalObject(spinButtonContainerProps)

	const {
		className: incrementButtonClassName,
		onPress: incrementButtonOnPress,
		onLongPress: incrementOnLongPress,
		onPointerUp: incrementOnPointerUp,
		onPointerLeave: incrementOnPointerLeave,
		onPointerCancel: incrementOnPointerCancel,
		...restIncrementButtonClassName
	} = getOptionalObject(incrementButtonProps)

	const {
		className: decrementButtonClassName,
		onPress: decrementButtonOnPress,
		onLongPress: decrementOnLongPress,
		onPointerUp: decrementOnPointerUp,
		onPointerLeave: decrementOnPointerLeave,
		onPointerCancel: decrementOnPointerCancel,
		...restDecrementButtonClassName
	} = getOptionalObject(decrementButtonProps)

	const { className: separatorClassName, ...restSeparatorProps } = getOptionalObject(separatorProps)

	const forcedVariant = variant === 'outline' ? 'outline' : 'solid'

	return {
		inputContainerProps: {
			isTextInput,
			isFocusWithin,
			isDisabled,
			isUsingAriaPressProps,
			'data-disabled': isDisabled,
			'data-read-only': isReadOnly,
			'data-invalid': isInvalid,
			'data-required': isRequired,
			'data-slot': 'base',
			className: cx(
				DEFAULT_NUMBER_INPUT_CONTAINER_CLASSNAME,
				inputContainerClasses({ size, variant: forcedVariant }),
				inputContainerClassName,
			),
			onPointerDown: chain(
				(event: React.PointerEvent<HTMLDivElement>) => event.preventDefault(),
				inputContainerOnPointerDown,
			),
			onClick: chain(() => focusInput(internalInputRef), inputContainerOnClick),
			...restInputContainerProps,
		},
		inputProps: {
			pattern,
			min,
			max,
			step,
			ref: mergedRefCallback,
			value: value ?? '',
			role: 'spinbutton',
			inputMode: 'numeric',
			'aria-valuemin': min ? Number(min) : undefined,
			'aria-valuemax': max ? Number(max) : undefined,
			'aria-valuenow': value ? Number(value) : undefined,
			'aria-required': isRequired,
			'aria-disabled': isDisabled,
			'aria-readonly': isReadOnly,
			'aria-invalid': isInvalid,
			'data-disabled': isDisabled,
			'data-read-only': isReadOnly,
			'data-invalid': isInvalid,
			'data-required': isRequired,
			'data-slot': 'input',
			disabled: isDisabled,
			readOnly: isReadOnly,
			className: cn(DEFAULT_NUMBER_INPUT_CLASSNAME, className),
			onChange: getOnChange({
				min,
				max,
				pattern,
				setValue,
				onChange: nativeOnChange,
			}),
			onPointerDown: chain(onPointerDown, (event: React.PointerEvent<HTMLInputElement>) =>
				event.stopPropagation(),
			),
			onKeyDownCapture: chain(
				getHandleKeyPressCapture({
					min,
					max,
					step,
					pattern,
					setValue,
				}),
				onKeyDownCapture,
			),
			onClick: chain(
				(event: React.MouseEvent<HTMLInputElement, MouseEvent>) => event.stopPropagation(),
				onClick,
			),
			onMouseDown: chain(
				(event: React.MouseEvent<HTMLInputElement, MouseEvent>) => event.stopPropagation(),
				onMouseDown,
			),
			...restProps,
		} as const,
		spinButtonContainerProps: {
			className: cn(
				DFEAULT_NUMBER_INPUT_SPIN_BUTTON_CONTAINER_CLASSNAME,
				forcedVariant === 'outline' ? 'border-mode-accent' : 'border-separator',
				spinButtonContainerClassName,
			),
			'data-slot': 'spin-button-container',
			...restSpinButtonContainerClassName,
		},
		incrementButtonProps: {
			action: 'increment',
			'data-slot': 'increment-button',
			className: cx(DEFAULT_NUMBER_INPUT_INCREMENT_BUTTON_CLASSNAME, incrementButtonClassName),
			onPress: chain(increment, incrementButtonOnPress),
			onLongPress: chain(incrementWithVariableSpeed, incrementOnLongPress),
			onPointerUp: chain(stopIncrementing, incrementOnPointerUp),
			onPointerLeave: chain(stopIncrementing, incrementOnPointerLeave),
			onPointerCancel: chain(stopIncrementing, incrementOnPointerCancel),
			...restIncrementButtonClassName,
		} as const,
		decrementButtonProps: {
			action: 'decrement',
			'data-slot': 'decrement-button',
			className: cx(DEFAULT_NUMBER_INPUT_DECREMENT_BUTTON_CLASSNAME, decrementButtonClassName),
			onPress: chain(decrement, decrementButtonOnPress),
			onLongPress: chain(decrementWithVariableSpeed, decrementOnLongPress),
			onPointerUp: chain(stopDecrementing, decrementOnPointerUp),
			onPointerLeave: chain(stopDecrementing, decrementOnPointerLeave),
			onPointerCancel: chain(stopDecrementing, decrementOnPointerCancel),
			...restDecrementButtonClassName,
		} as const,
		separatorProps: {
			'data-slot': 'separator',
			className: cx(
				forcedVariant === 'outline' ? SEPARATOR_OUTLINE_CLASSNAME : '',
				separatorClassName,
			),
			...restSeparatorProps,
		},
		utilityProps: {
			startContent: functionCallOrValue(startContent, value ?? ''),
			children: functionCallOrValue(children, value ?? ''),
			endContent: functionCallOrValue(endContent, value ?? ''),
			hasSpinButtons,
		},
	} as const
}

export { useNumberInput }
