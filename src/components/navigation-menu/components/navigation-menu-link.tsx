'use client'

import { NavigationMenuLink as NavigationMenuLinkPrimitive } from '@radix-ui/react-navigation-menu'
import { cn } from '@renderui/utils'
import React from 'react'

import { Button } from '@/components/button'
import { DEFAULT_NAVIGATION_MENU_LINK_CLASSNAME } from '@/components/navigation-menu/constants/constants'
import {
  NavigationMenuLinkProps,
  NavigationMenuLinkRef,
} from '@/components/navigation-menu/types/navigation-menu-link'

const NavigationMenuLink = React.forwardRef<NavigationMenuLinkRef, NavigationMenuLinkProps>(
  (props, ref) => {
    const { onSelect, className, active, variant = 'plain', ...restProps } = props

    return (
      <NavigationMenuLinkPrimitive asChild active={active} onSelect={onSelect}>
        <Button
          ref={ref}
          variant={variant}
          className={cn(DEFAULT_NAVIGATION_MENU_LINK_CLASSNAME, className)}
          {...restProps}
        />
      </NavigationMenuLinkPrimitive>
    )
  },
)

NavigationMenuLink.displayName = 'NavigationMenuLink'

export { NavigationMenuLink }
