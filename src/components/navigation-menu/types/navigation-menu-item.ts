import { NavigationMenuItem as NavigationMenuItemPrimitive } from '@radix-ui/react-navigation-menu'
import React from 'react'

type NavigationMenuItemPrimitiveType = typeof NavigationMenuItemPrimitive

type NavigationMenuItemRef = React.ElementRef<NavigationMenuItemPrimitiveType>

type NavigationMenuItemProps = React.ComponentPropsWithoutRef<NavigationMenuItemPrimitiveType>

export type { NavigationMenuItemProps, NavigationMenuItemRef }
