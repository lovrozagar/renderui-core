'use client'

import { NavigationMenuContent as NavigationMenuContentPrimitive } from '@radix-ui/react-navigation-menu'
import { cn } from '@renderui/utils'
import React from 'react'

import { DEFAULT_NAVIGATION_MENU_CONTENT_CLASSNAME } from '@/components/navigation-menu/constants/constants'
import {
  NavigationMenuContentProps,
  NavigationMenuContentRef,
} from '@/components/navigation-menu/types/navigation-menu-content'

const NavigationMenuContent = React.forwardRef<
  NavigationMenuContentRef,
  NavigationMenuContentProps
>((props, ref) => {
  const { className, ...restProps } = props

  return (
    <NavigationMenuContentPrimitive
      ref={ref}
      className={cn(DEFAULT_NAVIGATION_MENU_CONTENT_CLASSNAME, className)}
      {...restProps}
    />
  )
})

NavigationMenuContent.displayName = 'NavigationMenuContent'

export { NavigationMenuContent }
