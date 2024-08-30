'use client'

import {
	DialogContent as DialogContentPrimitive,
	DialogPortal as DialogPortalPrimitive,
} from '@radix-ui/react-dialog'
import { cn, cx, getOptionalObject } from '@renderui/utils'

import { CrossSmallIcon } from '@/components/_shared/components/icons/cross-small-icon'
import { Button } from '@/components/button/components/button'
import { DialogClose } from '@/components/dialog/components/dialog-close'
import {
	DEFAULT_DIALOG_CLOSE_BUTTON_CLASSNAME,
	DEFAULT_DIALOG_CLOSE_BUTTON_ICON_CLASSNAME,
	DFEAULT_DIALOG_CONTENT_CLASSNAME,
} from '@/components/dialog/constants/constants'
import type { DialogContentProps } from '@/components/dialog/types/dialog-content'
import { Overlay } from '@/components/overlay/components/overlay'
import { VisuallyHidden } from '@/components/visually-hidden/components/visually-hidden'
import { getAnimationStyleVariables } from '@renderui/utils'
import { useContentRefContext } from '@/components/_shared/contexts/content-ref-context'
import { useMergedRef } from '@/components/_shared/hooks/use-merged-ref'

const DialogContent = (props: DialogContentProps) => {
	const {
		ref,
		className,
		style,
		children,
		closeButtonProps,
		closeButtonIconProps,
		animationDuration,
		animationInDuration,
		animationOutDuration,
		animationTimingFunction,
		animationInTimingFunction,
		animationOutTimingFunction,
		hasCloseButton = true,
		...restProps
	} = props

	const {
		className: closeButtonClassName,
		'aria-label': closeButtonAriaLabel,
		variant = 'ghost',
		color = 'mode-contrast',
		...restCloseButtonProps
	} = getOptionalObject(closeButtonProps)

	const { className: closeButtonIconClassName, ...restCloseButtonIconProps } =
		getOptionalObject(closeButtonIconProps)

	const { contentRef } = useContentRefContext()

	const mergedRefCallback = useMergedRef([contentRef, ref])

	return (
		<DialogPortalPrimitive>
			<Overlay />
			<DialogContentPrimitive
				ref={mergedRefCallback}
				className={cn(DFEAULT_DIALOG_CONTENT_CLASSNAME, className)}
				style={{
					...getAnimationStyleVariables({
						animationDuration,
						animationInDuration,
						animationOutDuration,
						animationTimingFunction,
						animationInTimingFunction,
						animationOutTimingFunction,
						defaultAnimationDuration: 200,
						defaultAnimationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
					}),
					...style,
				}}
				{...restProps}
			>
				{hasCloseButton ? (
					<DialogClose asChild>
						<Button
							variant={variant}
							color={color}
							className={cx(DEFAULT_DIALOG_CLOSE_BUTTON_CLASSNAME, closeButtonClassName, className)}
							{...restCloseButtonProps}
						>
							<CrossSmallIcon
								className={cn(DEFAULT_DIALOG_CLOSE_BUTTON_ICON_CLASSNAME, closeButtonIconClassName)}
								{...restCloseButtonIconProps}
							/>
							{closeButtonAriaLabel ? null : <VisuallyHidden>Close</VisuallyHidden>}
						</Button>
					</DialogClose>
				) : null}
				{children}
			</DialogContentPrimitive>
		</DialogPortalPrimitive>
	)
}

export { DialogContent }
