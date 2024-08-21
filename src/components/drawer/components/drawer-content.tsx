import { CrossSmallIcon } from '@/components/_shared/components/icons'
import { Button } from '@/components/button'
import type { DrawerContentProps } from '@/components/drawer/types/drawer-content'
import { Overlay } from '@/components/overlay'
import { VisuallyHidden } from '@/components/visually-hidden'
import { cn, cx } from '@renderui/utils'
import { getOptionalObject } from '@renderui/utils'
import React from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'

import { DrawerClose } from '@/components/drawer/components/drawer-close'
import {
	DEFAULT_DRAWER_CLOSE_BUTTON_CLASSNAME,
	DEFAULT_DRAWER_CLOSE_BUTTON_ICON_CLASSNAME,
	DEFAULT_DRAWER_CONTENT_CLASSNAME,
	DEFAULT_DRAWER_INDICATOR_CLASSNAME,
} from '@/components/drawer/constant/constants'

const DrawerContent = (props: DrawerContentProps) => {
	const {
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

	return (
		<DrawerPrimitive.Portal>
			<Overlay {...overlayProps} />
			<DrawerPrimitive.Content
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
