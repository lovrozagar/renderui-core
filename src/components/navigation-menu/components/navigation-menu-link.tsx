'use client'

import { NavigationMenuLink as NavigationMenuLinkPrimitive } from '@radix-ui/react-navigation-menu'
import { cn } from '@renderui/utils'

import { Button } from '@/components/button/components/button'
import { DEFAULT_NAVIGATION_MENU_LINK_CLASSNAME } from '@/components/navigation-menu/constants/constants'
import type { NavigationMenuLinkProps } from '@/components/navigation-menu/types/navigation-menu-link'

const NavigationMenuLink = (props: NavigationMenuLinkProps) => {
	const { onSelect, className, active, variant = 'plain', ...restProps } = props

	return (
		<NavigationMenuLinkPrimitive asChild active={active} onSelect={onSelect}>
			<Button
				variant={variant}
				className={cn(DEFAULT_NAVIGATION_MENU_LINK_CLASSNAME, className)}
				{...restProps}
			/>
		</NavigationMenuLinkPrimitive>
	)
}

export { NavigationMenuLink }
