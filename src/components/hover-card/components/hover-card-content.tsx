import { DEFAULT_HOVER_CARD_CONTENT_CLASSNAME } from '@/components/hover-card/constants/constants'
import type { HoverCardContentProps } from '@/components/hover-card/types/hover-card-content'
import {
	HoverCardArrow as HoverCardArrowPrimitive,
	HoverCardContent as HoverCardContentPrimitive,
} from '@radix-ui/react-hover-card'
import { cn, getAnimationStyleVariables } from '@renderui/utils'
import React from 'react'

const HoverCardContent = (props: HoverCardContentProps) => {
	const {
		align = 'center',
		sideOffset = 4,
		side = 'bottom',
		children,
		className,
		style,
		animationDuration,
		animationInDuration,
		animationOutDuration,
		animationTimingFunction,
		animationInTimingFunction,
		animationOutTimingFunction,
		...restProps
	} = props

	return (
		<HoverCardContentPrimitive
			align={align}
			sideOffset={sideOffset}
			side={side}
			className={cn(DEFAULT_HOVER_CARD_CONTENT_CLASSNAME, className)}
			style={{
				...getAnimationStyleVariables({
					animationDuration,
					animationInDuration,
					animationOutDuration,
					animationTimingFunction,
					animationInTimingFunction,
					animationOutTimingFunction,
					defaultAnimationDuration: 150,
					defaultAnimationTimingFunction: 'ease',
				}),
				...style,
			}}
			{...restProps}
		>
			{children}
			<HoverCardArrowPrimitive />
		</HoverCardContentPrimitive>
	)
}

export { HoverCardContent }
