import { NavigationMenuContent as NavigationMenuContentPrimitive } from '@radix-ui/react-navigation-menu'
import { AnimationStyleVariables } from '@renderui/utils/get-animation-style-variables'
import React from 'react'

type NavigationMenuContentPrimitiveType = typeof NavigationMenuContentPrimitive

type NavigationMenuContentRef = React.ElementRef<NavigationMenuContentPrimitiveType>

type NavigationMenuContentProps =
  React.ComponentPropsWithoutRef<NavigationMenuContentPrimitiveType> & AnimationStyleVariables

export type { NavigationMenuContentProps, NavigationMenuContentRef }
