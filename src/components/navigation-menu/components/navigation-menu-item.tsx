'use client'

import { NavigationMenuItem as NavigationMenuItemPrimitive } from '@radix-ui/react-navigation-menu'
import { cn } from '@renderui/utils'
import React from 'react'

import { DEFAULT_NAVIGATION_MENU_ITEM_CLASSNAME } from '@/components/navigation-menu/constants/constants'
import type { NavigationMenuItemProps } from '@/components/navigation-menu/types/navigation-menu-item'

const NavigationMenuItem = (props: NavigationMenuItemProps) => {
	const { className, ...restProps } = props

	return (
		<NavigationMenuItemPrimitive
			className={cn(DEFAULT_NAVIGATION_MENU_ITEM_CLASSNAME, className)}
			{...restProps}
		/>
	)
}

export { NavigationMenuItem }
