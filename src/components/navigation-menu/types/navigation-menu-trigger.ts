import { ChevronDownIcon } from '@radix-ui/react-icons'
import { NavigationMenuTrigger as NavigationMenuTriggerPrimitive } from '@radix-ui/react-navigation-menu'
import { Simplify } from '@renderui/types'
import React from 'react'

type NavigationMenuTriggerPrimitiveType = typeof NavigationMenuTriggerPrimitive

type NavigationMenuTriggerRef = React.ElementRef<NavigationMenuTriggerPrimitiveType>

type NavigationMenuTriggerPrimitiveProps =
  React.ComponentPropsWithoutRef<NavigationMenuTriggerPrimitiveType>

type NavigationMenuTriggerRenderUIProps = {
  indicator?: React.ReactNode
  indicatorProps?: React.ComponentPropsWithoutRef<typeof ChevronDownIcon>
  hasIndicator?: boolean
}

type NavigationMenuTriggerProps = Simplify<
  NavigationMenuTriggerPrimitiveProps & NavigationMenuTriggerRenderUIProps
>

export type { NavigationMenuTriggerProps, NavigationMenuTriggerRef }
