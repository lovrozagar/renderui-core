'use client'

import {
	TooltipArrow as TooltipArrowPrimitive,
	TooltipContent as TooltipContentPrimitive,
} from '@radix-ui/react-tooltip'
import { cn, getOptionalObject } from '@renderui/utils'

import {
	DEFAULT_SIDE_OFFSET,
	DEFAULT_TOOLTIP_ARROW_CLASSNAME,
	DEFAULT_TOOLTIP_CONTENT_CLASSNAME,
} from '@/components/tooltip/constants/constants'
import type { TooltipContentProps } from '@/components/tooltip/types/tooltip-content'
import { getAnimationStyleVariables } from '@renderui/utils'
import type { CSSProperties } from 'react'

const TooltipContent = (props: TooltipContentProps) => {
	const {
		children,
		className,
		arrowProps,
		style,
		animationDuration,
		animationInDuration,
		animationOutDuration,
		animationTimingFunction,
		animationInTimingFunction,
		animationOutTimingFunction,
		side = 'top',
		color = 'mode-contrast',
		hasArrow = true,
		avoidCollisions = true,
		sideOffset = DEFAULT_SIDE_OFFSET,
		...restProps
	} = props

	const { className: arrowClassName, ...restArrowProps } = getOptionalObject(arrowProps)

	return (
		<TooltipContentPrimitive
			data-slot='content'
			side={side}
			sideOffset={sideOffset}
			className={cn(DEFAULT_TOOLTIP_CONTENT_CLASSNAME, className)}
			style={
				{
					...getAnimationStyleVariables({
						animationDuration,
						animationInDuration,
						animationOutDuration,
						animationTimingFunction,
						animationInTimingFunction,
						animationOutTimingFunction,
						defaultAnimationDuration: 200,
						defaultAnimationTimingFunction: 'ease',
					}),
					...style,
					'--content-bg': `var(--${color})`,
					'--content-color': `var(--${color}-foreground)`,
				} as CSSProperties
			}
			{...restProps}
		>
			{children}
			{hasArrow ? (
				<TooltipArrowPrimitive
					className={cn(DEFAULT_TOOLTIP_ARROW_CLASSNAME, arrowClassName)}
					{...restArrowProps}
				/>
			) : null}
		</TooltipContentPrimitive>
	)
}

export { TooltipContent }
