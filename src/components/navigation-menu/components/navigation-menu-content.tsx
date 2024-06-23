'use client'

import { NavigationMenuContent as NavigationMenuContentPrimitive } from '@radix-ui/react-navigation-menu'
import { cn } from '@renderui/utils'
import React from 'react'

import { getAnimationStyleVariables } from '@/components/_shared/utils/get-animation-style-variables'
import { DEFAULT_NAVIGATION_MENU_CONTENT_CLASSNAME } from '@/components/navigation-menu/constants/constants'
import {
  NavigationMenuContentProps,
  NavigationMenuContentRef,
} from '@/components/navigation-menu/types/navigation-menu-content'

const NavigationMenuContent = React.forwardRef<
  NavigationMenuContentRef,
  NavigationMenuContentProps
>((props, ref) => {
  const {
    className,
    style,
    animationDuration,
    animationInDuration,
    animationOutDuration,
    ...restProps
  } = props

  return (
    <NavigationMenuContentPrimitive
      ref={ref}
      className={cn(DEFAULT_NAVIGATION_MENU_CONTENT_CLASSNAME, className)}
      style={{
        ...getAnimationStyleVariables({
          animationDuration,
          animationInDuration,
          animationOutDuration,
          defaultAnimationInDuration: 300,
          defaultAnimationOutDuration: 200,
        }),
        ...style,
      }}
      {...restProps}
    />
  )
})

NavigationMenuContent.displayName = 'NavigationMenuContent'

export { NavigationMenuContent }
