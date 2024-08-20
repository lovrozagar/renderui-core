'use client'

import { NavigationMenuContent as NavigationMenuContentPrimitive } from '@radix-ui/react-navigation-menu'
import { cn } from '@renderui/utils'
import React from 'react'

import { DEFAULT_NAVIGATION_MENU_CONTENT_CLASSNAME } from '@/components/navigation-menu/constants/constants'
import type { NavigationMenuContentProps } from '@/components/navigation-menu/types/navigation-menu-content'
import { getAnimationStyleVariables } from '@renderui/utils'

const NavigationMenuContent = (props: NavigationMenuContentProps) => {
	const {
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
		<NavigationMenuContentPrimitive
			className={cn(DEFAULT_NAVIGATION_MENU_CONTENT_CLASSNAME, className)}
			style={{
				...getAnimationStyleVariables({
					animationDuration,
					animationInDuration,
					animationOutDuration,
					animationTimingFunction,
					animationInTimingFunction,
					animationOutTimingFunction,
					defaultAnimationDuration: 300,
					defaultAnimationTimingFunction: 'ease',
				}),
				...style,
			}}
			{...restProps}
		/>
	)
}

export { NavigationMenuContent }
