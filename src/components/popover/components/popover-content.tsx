'use client'

import {
	PopoverArrow as PopoverArrowPrimitive,
	PopoverContent as PopoverContentPrimitive,
	PopoverPortal as PopoverPortalPrimitive,
} from '@radix-ui/react-popover'
import { cn } from '@renderui/utils'

import { ContentArrow } from '@/components/_shared/components/content-arrow/content-arrow'
import { useMergedRef } from '@/components/_shared/hooks/use-merged-ref'
import {
	DEFAULT_POPOVER_CONTENT_CLASSNAME,
	POPOVER_CONTENT_TRIGGER_HEIGHT_CLASSNAME,
	POPOVER_CONTENT_TRIGGER_MAX_HEIGHT_CLASSNAME,
	POPOVER_CONTENT_TRIGGER_MAX_WIDTH_CLASSNAME,
	POPOVER_CONTENT_TRIGGER_MIN_HEIGHT_CLASSNAME,
	POPOVER_CONTENT_TRIGGER_MIN_WIDTH_CLASSNAME,
	POPOVER_CONTENT_TRIGGER_WIDTH_CLASSNAME,
} from '@/components/popover/constants/constants'
import { usePopoverContext } from '@/components/popover/contexts/popover-context'
import type { PopoverContentProps } from '@/components/popover/types/popover-content'
import { getAnimationStyleVariables } from '@renderui/utils'

const PopoverContent = (props: PopoverContentProps) => {
	const {
		ref,
		children,
		style,
		className,
		portalContainer,
		forceMount,
		hasTriggerHeight,
		hasTriggerWidth,
		hasTriggerMinWidth,
		hasTriggerMinHeight,
		hasTriggerMaxWidth,
		hasTriggerMaxHeight,
		arrowContainerProps,
		arrowProps,
		animationDuration,
		animationInDuration,
		animationOutDuration,
		animationTimingFunction,
		animationInTimingFunction,
		animationOutTimingFunction,
		hasArrow = true,
		align = 'center',
		sideOffset = 4,
		...restProps
	} = props

	const { contentRef } = usePopoverContext()

	const mergedRefCallback = useMergedRef([contentRef, ref])

	return (
		<PopoverPortalPrimitive container={portalContainer} forceMount={forceMount}>
			<PopoverContentPrimitive
				ref={mergedRefCallback}
				data-slot='content'
				align={align}
				forceMount={forceMount}
				sideOffset={sideOffset}
				className={cn(
					DEFAULT_POPOVER_CONTENT_CLASSNAME,
					hasTriggerHeight ? POPOVER_CONTENT_TRIGGER_HEIGHT_CLASSNAME : undefined,
					hasTriggerWidth ? POPOVER_CONTENT_TRIGGER_WIDTH_CLASSNAME : undefined,
					hasTriggerMinHeight ? POPOVER_CONTENT_TRIGGER_MIN_HEIGHT_CLASSNAME : undefined,
					hasTriggerMinWidth ? POPOVER_CONTENT_TRIGGER_MIN_WIDTH_CLASSNAME : undefined,
					hasTriggerMaxHeight ? POPOVER_CONTENT_TRIGGER_MAX_HEIGHT_CLASSNAME : undefined,
					hasTriggerMaxWidth ? POPOVER_CONTENT_TRIGGER_MAX_WIDTH_CLASSNAME : undefined,
					className,
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
				{hasArrow ? (
					<PopoverArrowPrimitive asChild>
						<ContentArrow arrowContainerProps={arrowContainerProps} arrowProps={arrowProps} />
					</PopoverArrowPrimitive>
				) : null}
			</PopoverContentPrimitive>
		</PopoverPortalPrimitive>
	)
}

export { PopoverContent }
