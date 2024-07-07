'use client'

import { NavigationMenuContent as NavigationMenuContentPrimitive } from '@radix-ui/react-navigation-menu'
import { cn } from '@renderui/utils'
import React from 'react'

import { DEFAULT_NAVIGATION_MENU_CONTENT_CLASSNAME } from '@/components/navigation-menu/constants/constants'
import {
  NavigationMenuContentProps,
  NavigationMenuContentRef,
} from '@/components/navigation-menu/types/navigation-menu-content'
import { getAnimationStyleVariables } from '@renderui/utils/get-animation-style-variables'

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
          ...props,
          defaultAnimationDuration: 300,
          defaultAnimationTimingFunction: 'ease',
        }),
        ...style,
      }}
      {...restProps}
    />
  )
})

NavigationMenuContent.displayName = 'NavigationMenuContent'

export { NavigationMenuContent }
