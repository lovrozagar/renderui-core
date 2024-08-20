'use client'

import { chain, cn, cx, functionCallOrValue, getOptionalObject, polymorphic } from '@renderui/utils'
import React from 'react'

import {
	DEFAULT_RADIO_GROUP_ITEM_CLASSNAME,
	DEFAULT_RADIO_GROUP_ITEM_INDICATOR_CLASSNAME,
	RADIO_GROU_ITEM_ACTIVE_INDICATOR_CLASSNAME,
} from '@/components/radio-group/constants/constants'
import { useRadioGroupContext } from '@/components/radio-group/contexts/radio-group-context'
import type { RadioGroupItemProps } from '@/components/radio-group/types/radio-group-item'
import { ToggleGroupItem } from '@/components/toggle-group'
import { VisuallyHidden } from '@/components/visually-hidden'

const RadioGroupItem = (props: RadioGroupItemProps) => {
	const {
		id,
		className,
		children,
		value,
		variant,
		indicatorProps,
		onClick,
		role = 'radio',
		color = 'primary',
		hasRipple = false,
		...restProps
	} = props

	const { name, isInvalid, value: rootValue, setValue } = useRadioGroupContext()

	const {
		asChild: indicatorAsChild,
		className: indicatorClassName,
		...restIndicatorProps
	} = getOptionalObject(indicatorProps)

	const Component = polymorphic(indicatorAsChild, 'span')

	const isChecked = rootValue === value

	return (
		<ToggleGroupItem
			id={id}
			role={role}
			value={value as string}
			color={isInvalid ? 'destructive' : color}
			variant={variant ?? isChecked ? 'solid' : 'outline'}
			hasRipple={hasRipple}
			aria-checked={isChecked}
			data-state={isChecked ? 'checked' : 'unchecked'}
			data-slot='item'
			onPress={chain(onClick, () => setValue(value))}
			className={cx(
				DEFAULT_RADIO_GROUP_ITEM_CLASSNAME,
				isInvalid ? 'ring-destructive' : undefined,
				className,
			)}
			{...restProps}
		>
			{functionCallOrValue(children, isChecked)}
			<Component
				data-slot='indicator'
				className={cn(
					DEFAULT_RADIO_GROUP_ITEM_INDICATOR_CLASSNAME,
					isChecked ? RADIO_GROU_ITEM_ACTIVE_INDICATOR_CLASSNAME : undefined,
					indicatorClassName,
				)}
				{...restIndicatorProps}
			/>
			<VisuallyHidden>
				<input
					type='radio'
					data-slot='hidden-input'
					aria-hidden
					tabIndex={-1}
					id={id}
					name={name}
					value={value}
					checked={isChecked}
					onChange={(event) => setValue(event.target.value)}
				/>
			</VisuallyHidden>
		</ToggleGroupItem>
	)
}

export { RadioGroupItem }
