'use client'

import { TooltipTrigger as TooltipTriggerPrimitive } from '@radix-ui/react-tooltip'
import { chain, cx } from '@renderui/utils'
import React from 'react'

import { Button } from '@/components/button'
import { DEFAULT_TOOLTIP_TRIGGER_CLASSNAME } from '@/components/tooltip/constants/constants'
import type { TooltipTriggerProps } from '@/components/tooltip/types/tooltip-trigger'

const TooltipTrigger = (props: TooltipTriggerProps) => {
	const {
		className,
		onMouseEnter,
		onMouseLeave,
		hasRipple = false,
		hasDefaultPressedStyles = false,
		variant = 'plain',
		color = 'mode-accent',
		...restProps
	} = props

	/* aria hover event not always firing in combination with radix asChild, track manually with native event */
	const [isHovered, setIsHovered] = React.useState(false)

	return (
		<TooltipTriggerPrimitive asChild>
			<Button
				data-slot='trigger'
				color={color}
				variant={variant}
				hasRipple={hasRipple}
				hasDefaultPressedStyles={hasDefaultPressedStyles}
				className={cx(DEFAULT_TOOLTIP_TRIGGER_CLASSNAME, className)}
				onMouseEnter={chain(onMouseEnter, () => setIsHovered(true))}
				onMouseLeave={chain(onMouseLeave, () => setIsHovered(false))}
				data-hover={isHovered}
				{...restProps}
			/>
		</TooltipTriggerPrimitive>
	)
}

export { TooltipTrigger }
