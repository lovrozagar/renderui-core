import type { NavigationMenuItem as NavigationMenuItemPrimitive } from '@radix-ui/react-navigation-menu'
import type React from 'react'

type NavigationMenuItemPrimitiveType = typeof NavigationMenuItemPrimitive

type NavigationMenuItemProps = React.ComponentPropsWithRef<NavigationMenuItemPrimitiveType>

export type { NavigationMenuItemProps }
