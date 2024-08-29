'use client'

import { chain, cn, cx, functionCallOrValue, getOptionalObject, polymorphic } from '@renderui/utils'
import type React from 'react'

import { useControllableState } from '@/components/_shared/hooks/use-controllable-state'
import { Button } from '@/components/button/components/button'
import { CheckboxIndicator } from '@/components/checkbox/components/checkbox-indicator'
import {
	DEFAULT_CHECKBOX_CLASSNAME,
	DEFAULT_CHECKBOX_HIDDEN_INPUT_CLASSNAME,
} from '@/components/checkbox/constants/constants'
import type { CheckboxProps } from '@/components/checkbox/types/checkbox'
import { VisuallyHidden } from '@/components/visually-hidden/components/visually-hidden'

const Checkbox = (props: CheckboxProps) => {
	const {
		inputRef,
		inputProps,
		name,
		className,
		defaultChecked,
		isChecked: checkedProp,
		isDisabled,
		isInvalid,
		isReadOnly,
		isRequired,
		startContent,
		endContent,
		children,
		animationDuration,
		onCheckedChange,
		onPress,
		color = 'primary',
		hasRipple = false,
		hasIconContentWhenUnchecked = true,
		...restProps
	} = props

	const [checked, setChecked] = useControllableState<boolean>({
		prop: checkedProp,
		defaultProp: defaultChecked,
		onChange: onCheckedChange,
	})

	const {
		asChild,
		name: inputName,
		value: inputValue,
		className: inputClassName,
		checked: inputChecked,
		onChange,
		tabIndex = -1,
		...restInputProps
	} = getOptionalObject(inputProps)

	const InputComponent = polymorphic(asChild, 'input')

	return (
		<Button
			role='checkbox'
			variant='outline'
			color={isInvalid ? 'destructive' : color}
			value={checked ? 'on' : 'off'}
			aria-checked={checked}
			aria-disabled={isDisabled}
			aria-readonly={isReadOnly}
			aria-invalid={isInvalid}
			aria-required={isRequired}
			data-slot='base'
			data-state={checked ? 'checked' : 'unchecked'}
			data-disabled={isDisabled}
			data-readonly={isReadOnly}
			data-invalid={isInvalid}
			data-required={isRequired}
			hasRipple={hasRipple}
			className={cx(DEFAULT_CHECKBOX_CLASSNAME, className)}
			onPress={chain(onPress, () => setChecked((previousChecked) => !previousChecked))}
			{...restProps}
		>
			{functionCallOrValue(startContent, checked)}
			{functionCallOrValue(children, checked)}
			<CheckboxIndicator
				isChecked={checked}
				animationDuration={animationDuration}
				hasIconContentWhenUnchecked={hasIconContentWhenUnchecked}
			/>
			<VisuallyHidden>
				<InputComponent
					ref={inputRef}
					tabIndex={tabIndex}
					name={name ?? inputName}
					className={cn(DEFAULT_CHECKBOX_HIDDEN_INPUT_CLASSNAME, inputClassName)}
					value={inputValue ?? checked ? 'true' : 'false'}
					checked={inputChecked ?? checked}
					onChange={chain(onChange, (event: React.ChangeEvent<HTMLInputElement>) =>
						setChecked(event.target.checked),
					)}
					{...restInputProps}
				/>
			</VisuallyHidden>
			{functionCallOrValue(endContent, checked)}
		</Button>
	)
}

export { Checkbox }
