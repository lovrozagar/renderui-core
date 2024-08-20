'use client'

import { Toggle as TogglePrimitive } from '@radix-ui/react-toggle'
import { cn, functionCallOrValue } from '@renderui/utils'
import React from 'react'

import { useControllableState } from '@/components/_shared/hooks/use-controllable-state'
import { Button } from '@/components/button'
import { DEFAUL_TOGGLE_CLASSNAME } from '@/components/toggle/constants/constants'
import { ToggleProps } from '@/components/toggle/types/toggle'

const Toggle = (props: ToggleProps) => {
	const {
		onIsOnChange,
		defaultIsOn,
		isOn: isOnProp,
		className,
		children,
		variant,
		hasRipple = false,
		color = 'primary',
		...restProps
	} = props

	const [isOn, setIsOn] = useControllableState<boolean>({
		onChange: onIsOnChange,
		defaultProp: defaultIsOn,
		prop: isOnProp,
	})

	return (
		<TogglePrimitive asChild pressed={isOn} onPressedChange={setIsOn}>
			<Button
				color={color}
				variant={variant ?? (isOn ? 'solid' : 'plain')}
				hasRipple={hasRipple}
				className={cn(DEFAUL_TOGGLE_CLASSNAME, className)}
				{...restProps}
			>
				{functionCallOrValue(children, { isOn })}
			</Button>
		</TogglePrimitive>
	)
}

export { Toggle }
