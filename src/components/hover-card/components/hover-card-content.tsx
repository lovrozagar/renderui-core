'use client'

import { ContentArrow } from '@/components/_shared/components/content-arrow/content-arrow'
import type { HoverCardContentProps } from '@/components/hover-card/types/hover-card-content'
import { DEFAULT_POPOVER_CONTENT_CLASSNAME } from '@/components/popover/constants/constants'
import {
	HoverCardArrow as HoverCardArrowPrimitive,
	HoverCardContent as HoverCardContentPrimitive,
} from '@radix-ui/react-hover-card'
import { cn, getAnimationStyleVariables } from '@renderui/utils'

const HoverCardContent = (props: HoverCardContentProps) => {
	const {
		children,
		className,
		style,
		animationDuration,
		animationInDuration,
		animationOutDuration,
		animationTimingFunction,
		animationInTimingFunction,
		animationOutTimingFunction,
		arrowContainerProps,
		arrowProps,
		align = 'center',
		side = 'bottom',
		sideOffset = 4,
		hasArrow = true,
		...restProps
	} = props

	return (
		<HoverCardContentPrimitive
			align={align}
			sideOffset={sideOffset}
			side={side}
			className={cn(DEFAULT_POPOVER_CONTENT_CLASSNAME, className)}
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
			{hasArrow ? (
				<HoverCardArrowPrimitive asChild>
					<ContentArrow arrowContainerProps={arrowContainerProps} arrowProps={arrowProps} />
				</HoverCardArrowPrimitive>
			) : null}
		</HoverCardContentPrimitive>
	)
}

export { HoverCardContent }
