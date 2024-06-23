import { AnimationStyleVariaiables } from '@/components/_shared/utils/get-animation-style-variables'
import { NavigationMenuContent as NavigationMenuContentPrimitive } from '@radix-ui/react-navigation-menu'
import React from 'react'

type NavigationMenuContentPrimitiveType = typeof NavigationMenuContentPrimitive

type NavigationMenuContentRef = React.ElementRef<NavigationMenuContentPrimitiveType>

type NavigationMenuContentProps =
  React.ComponentPropsWithoutRef<NavigationMenuContentPrimitiveType> & AnimationStyleVariaiables

export type { NavigationMenuContentProps, NavigationMenuContentRef }
