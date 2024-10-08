import type { Simplify } from '@/components/_shared/types/simplify'
import type {
	NavigationMenuIndicator as NavigationMenuIndicatorPrimitive,
	NavigationMenuList as NavigationMenuListPrimitive,
	NavigationMenu as NavigationMenuPrimitive,
	NavigationMenuViewport as NavigationMenuViewportPrimitive,
} from '@radix-ui/react-navigation-menu'
import type { AnimationStyleVariables } from '@renderui/utils'
import type React from 'react'

type NavigationMenuPrimitiveType = typeof NavigationMenuPrimitive

type NavigationMenuIndicatorPrimitiveType = typeof NavigationMenuIndicatorPrimitive

type NavigationMenuListPrimitiveType = typeof NavigationMenuListPrimitive

type NavigationMenuViewportPrimitiveType = typeof NavigationMenuViewportPrimitive

type NavigationMenuPrimitiveProps = React.ComponentPropsWithRef<NavigationMenuPrimitiveType>

type NavigationMenuIndicatorPrimitiveProps =
	React.ComponentPropsWithRef<NavigationMenuIndicatorPrimitiveType>

type NavigationMenuIndicatorArrowProps = React.ComponentPropsWithRef<'div'>

type NavigationMenuListPrimitiveProps = React.ComponentPropsWithRef<NavigationMenuListPrimitiveType>

type NavigationMenuViewportContainerProps = React.ComponentPropsWithRef<'div'>

type NavigationMenuViewportPrimitiveProps =
	React.ComponentPropsWithRef<NavigationMenuViewportPrimitiveType>

type NavigationMenuCustomProps = {
	listProps?: NavigationMenuListPrimitiveProps
	isFullScreen?: boolean
	viewportContainerProps?: NavigationMenuViewportContainerProps
	viewportProps?: NavigationMenuViewportPrimitiveProps
	hasIndicator?: boolean
	indicatorProps?: NavigationMenuIndicatorPrimitiveProps
	indicatorArrowProps?: NavigationMenuIndicatorArrowProps
} & AnimationStyleVariables

type NavigationMenuProps = Simplify<NavigationMenuPrimitiveProps & NavigationMenuCustomProps>

export type { NavigationMenuProps }
