import type { NavigationMenuContent as NavigationMenuContentPrimitive } from '@radix-ui/react-navigation-menu'
import type { AnimationStyleVariables } from '@renderui/utils'
import type React from 'react'

type NavigationMenuContentPrimitiveType = typeof NavigationMenuContentPrimitive

type NavigationMenuContentProps = React.ComponentPropsWithRef<NavigationMenuContentPrimitiveType> &
	AnimationStyleVariables

export type { NavigationMenuContentProps }
