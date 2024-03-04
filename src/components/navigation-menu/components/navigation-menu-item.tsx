import { NavigationMenuItem as NavigationMenuItemPrimitive } from '@radix-ui/react-navigation-menu'
import { cn } from '@renderui/utils'
import React from 'react'

import { DEFAULT_NAVIGATION_MENU_ITEM_CLASSNAME } from '@/components/navigation-menu/constants/constants'
import {
  NavigationMenuItemProps,
  NavigationMenuItemRef,
} from '@/components/navigation-menu/types/navigation-menu-item'

const NavigationMenuItem = React.forwardRef<NavigationMenuItemRef, NavigationMenuItemProps>(
  (props, ref) => {
    const { className, ...restProps } = props

    return (
      <NavigationMenuItemPrimitive
        ref={ref}
        className={cn(DEFAULT_NAVIGATION_MENU_ITEM_CLASSNAME, className)}
        {...restProps}
      />
    )
  },
)

NavigationMenuItem.displayName = 'NavigationMenuItem'

export { NavigationMenuItem }
