'use client'

import { PopoverTrigger as PopoverTriggerPrimitive } from '@radix-ui/react-popover'
import { cx } from '@renderui/utils'
import React from 'react'

import { Button } from '@/components/button'
import { DEFAULT_POPOVER_TRIGGER_CLASSNAME } from '@/components/popover/constants/constants'
import type { PopoverTriggerProps } from '@/components/popover/types/popover-trigger'

const PopoverTrigger = (props: PopoverTriggerProps) => {
	const {
		className,
		variant = 'solid',
		color = 'mode-accent',
		hasRipple = true,
		...restProps
	} = props

	return (
		<PopoverTriggerPrimitive asChild>
			<Button
				data-slot='trigger'
				color={color}
				variant={variant}
				hasRipple={hasRipple}
				className={cx(DEFAULT_POPOVER_TRIGGER_CLASSNAME, className)}
				{...restProps}
			/>
		</PopoverTriggerPrimitive>
	)
}

export { PopoverTrigger }
