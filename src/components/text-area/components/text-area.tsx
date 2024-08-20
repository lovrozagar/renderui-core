'use client'

import { chain, cn, cx, functionCallOrValue, getOptionalObject, polymorphic } from '@renderui/utils'
import type React from 'react'

import { inputContainerClasses } from '@/components/_shared/classes/input-container-classes'
import { useControllableState } from '@/components/_shared/hooks/use-controllable-state'
import { Aria } from '@/components/aria'
import {
	DEFAULT_TEXT_AREA_CLASSNAME,
	DEFAULT_TEXT_AREA_CONTAINER_CLASSNAME,
} from '@/components/text-area/constants/constants'
import type { TextAreaProps } from '@/components/text-area/types/text-area'

const TextArea = (props: TextAreaProps) => {
	const {
		asChild,
		value: valueProp,
		children,
		className,
		style,
		isDisabled,
		isReadOnly,
		isInvalid,
		isRequired,
		startContent,
		endContent,
		inputContainerProps,
		onChange,
		onValueChange,
		variant = 'solid',
		defaultValue = '',
		minHeight = 80,
		maxHeight = 200,
		...restProps
	} = props

	const [value, setValue] = useControllableState<string>({
		prop: valueProp as string,
		defaultProp: defaultValue as string,
		onChange: onValueChange,
	})

	const {
		className: inputContainerClassName,
		isTextInput = true,
		isFocusWithin = true,
		isUsingAriaPressProps = false,
		...restInputContainerProps
	} = getOptionalObject(inputContainerProps)

	const Component = polymorphic(asChild, 'textarea')

	return (
		<Aria
			isTextInput={isTextInput}
			isFocusWithin={isFocusWithin}
			isDisabled={isDisabled}
			isUsingAriaPressProps={isUsingAriaPressProps}
			data-readonly={isReadOnly}
			data-invalid={isInvalid}
			data-disabled={isDisabled}
			data-required={isRequired}
			data-slot='base'
			className={cx(
				inputContainerClasses({ variant }),
				DEFAULT_TEXT_AREA_CONTAINER_CLASSNAME,
				inputContainerClassName,
			)}
			style={
				{
					...style,
					'--min-height': `${minHeight}px`,
					'--max-height': `${maxHeight}px`,
				} as React.CSSProperties
			}
			{...restInputContainerProps}
		>
			{functionCallOrValue(startContent, value)}
			{functionCallOrValue(children, value)}
			<Component
				value={value}
				disabled={isDisabled}
				readOnly={isReadOnly}
				aria-readonly={isReadOnly}
				aria-invalid={isInvalid}
				aria-disabled={isDisabled}
				aria-required={isRequired}
				data-readonly={isReadOnly}
				data-invalid={isInvalid}
				data-disabled={isDisabled}
				data-required={isRequired}
				data-slot='input'
				className={cn(DEFAULT_TEXT_AREA_CLASSNAME, className)}
				onChange={chain(onChange, (event: React.ChangeEvent<HTMLTextAreaElement>) =>
					setValue(event.target.value),
				)}
				{...restProps}
			/>
			{functionCallOrValue(endContent, value)}
		</Aria>
	)
}

export { TextArea }
