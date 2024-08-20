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
			className={cn(
				'render-ui-popover-content data-[state=closed]:data-[side=bottom]:animate-popover-exit-from-top-and-fade-out data-[state=closed]:data-[side=top]:animate-popover-exit-from-bottom-and-fade-out data-[state=closed]:data-[side=right]:animate-popover-exit-from-left-and-fade-out data-[state=closed]:data-[side=left]:animate-popover-exit-from-right-and-fade-out data-[state=open]:data-[side=bottom]:animate-popover-enter-to-top-and-fade-in data-[state=open]:data-[side=left]:animate-popover-enter-to-right-and-fade-in data-[state=open]:data-[side=right]:animate-popover-enter-to-left-and-fade-in data-[state=open]:data-[side=top]:animate-popover-enter-to-bottom-and-fade-in z-50 box-border w-fit rounded-md border bg-background border-mode-accent text-mode-contrast p-4 shadow-md outline-none will-change-[transform,opacity] data-[side=bottom]:origin-top data-[side=left]:origin-right data-[side=right]:origin-left data-[side=top]:origin-bottom',
			)}
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
