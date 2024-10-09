'use client'

import {
	DialogContent as SheetContentPrimitive,
	DialogPortal as SheetPortalPrimitive,
} from '@radix-ui/react-dialog'
import { cn, cx, getOptionalObject } from '@renderui/utils'

import { CrossSmallIcon } from '@/components/_shared/components/icons/cross-small-icon'
import { ModalClose } from '@/components/_shared/components/modal-close/modal-close'
import { useContentRefContext } from '@/components/_shared/contexts/content-ref-context'
import { useMergedRef } from '@/components/_shared/hooks/use-merged-ref'
import { Button } from '@/components/button/components/button'
import { Overlay } from '@/components/overlay/components/overlay'
import { sheetClasses } from '@/components/sheet/classes/sheet-classes'
import {
	DEFAULT_SHEET_CLOSE_BUTTON_CLASSNAME,
	DEFAULT_SHEET_CLOSE_BUTTON_ICON_CLASSNAME,
} from '@/components/sheet/constants/constants'
import type { SheetContentProps } from '@/components/sheet/types/sheet-content'
import { VisuallyHidden } from '@/components/visually-hidden/components/visually-hidden'
import { getAnimationStyleVariables } from '@renderui/utils'

const SheetContent = (props: SheetContentProps) => {
	const {
		ref,
		className,
		style,
		children,
		portalProps,
		overlayProps,
		closeButtonProps,
		closeButtonIconProps,
		animationDuration,
		animationInDuration,
		animationOutDuration,
		animationTimingFunction,
		animationInTimingFunction,
		animationOutTimingFunction,
		hasCloseButton = true,
		side = 'right',
		smallSizeWidth = '3/4',
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
		<SheetPortalPrimitive {...portalProps}>
			<Overlay {...overlayProps} />
			<SheetContentPrimitive
				ref={mergedRefCallback}
				className={cn(
					sheetClasses({ side }),
					smallSizeWidth === '3/4' && (side === 'left' || side === 'right')
						? 'smallSizeWidth'
						: undefined,
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
						defaultAnimationDuration: 200,
						defaultAnimationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
					}),
					...style,
				}}
				{...restProps}
			>
				{children}
				{hasCloseButton ? (
					<ModalClose asChild>
						<Button
							variant={variant}
							color={color}
							className={cx(DEFAULT_SHEET_CLOSE_BUTTON_CLASSNAME, closeButtonClassName)}
							{...restCloseButtonProps}
						>
							<CrossSmallIcon
								className={cn(DEFAULT_SHEET_CLOSE_BUTTON_ICON_CLASSNAME, closeButtonIconClassName)}
								{...restCloseButtonIconProps}
							/>
							{closeButtonAriaLabel ? null : <VisuallyHidden>Close</VisuallyHidden>}
						</Button>
					</ModalClose>
				) : null}
			</SheetContentPrimitive>
		</SheetPortalPrimitive>
	)
}

export { SheetContent }
