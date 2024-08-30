import type { DrawerContentProps } from '@/components/drawer/types/drawer-content'
import { cn, cx, getOptionalObject } from '@renderui/utils'
import { Drawer as DrawerPrimitive } from 'vaul'

import { CrossSmallIcon } from '@/components/_shared/components/icons/cross-small-icon'
import { Button } from '@/components/button/components/button'
import { DrawerClose } from '@/components/drawer/components/drawer-close'
import {
	DEFAULT_DRAWER_CLOSE_BUTTON_CLASSNAME,
	DEFAULT_DRAWER_CLOSE_BUTTON_ICON_CLASSNAME,
	DEFAULT_DRAWER_CONTENT_CLASSNAME,
	DEFAULT_DRAWER_INDICATOR_CLASSNAME,
} from '@/components/drawer/constant/constants'
import { Overlay } from '@/components/overlay/components/overlay'
import { VisuallyHidden } from '@/components/visually-hidden/components/visually-hidden'
import { useContentRefContext } from '@/components/_shared/contexts/content-ref-context'
import { useMergedRef } from '@/components/_shared/hooks/use-merged-ref'

const DrawerContent = (props: DrawerContentProps) => {
	const {
		ref,
		className,
		children,
		indicatorProps,
		closeButtonProps,
		closeButtonIconProps,
		overlayProps,
		hasCloseButton = true,
		hasIndicator = true,
		...restProps
	} = props

	const { className: indicatorClassName, ...restIndicatorProps } = getOptionalObject(indicatorProps)

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
		<DrawerPrimitive.Portal>
			<Overlay {...overlayProps} />
			<DrawerPrimitive.Content
				ref={mergedRefCallback}
				className={cn(DEFAULT_DRAWER_CONTENT_CLASSNAME, className)}
				{...restProps}
			>
				{hasIndicator ? (
					<div
						className={cn(DEFAULT_DRAWER_INDICATOR_CLASSNAME, indicatorClassName)}
						{...restIndicatorProps}
					/>
				) : null}
				{children}
				{hasCloseButton ? (
					<DrawerClose asChild>
						<Button
							className={cx(DEFAULT_DRAWER_CLOSE_BUTTON_CLASSNAME, closeButtonClassName)}
							variant={variant}
							color={color}
							{...restCloseButtonProps}
						>
							<CrossSmallIcon
								className={cn(DEFAULT_DRAWER_CLOSE_BUTTON_ICON_CLASSNAME, closeButtonIconClassName)}
								{...restCloseButtonIconProps}
							/>
							{closeButtonAriaLabel ? null : <VisuallyHidden>Close</VisuallyHidden>}
						</Button>
					</DrawerClose>
				) : null}
			</DrawerPrimitive.Content>
		</DrawerPrimitive.Portal>
	)
}

export { DrawerContent }
