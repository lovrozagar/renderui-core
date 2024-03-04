'use client'

import { ChevronDownIcon } from '@radix-ui/react-icons'
import { NavigationMenuTrigger as NavigationMenuTriggerPrimitive } from '@radix-ui/react-navigation-menu'
import { chain, cn, getOptionalObject } from '@renderui/utils'
import React from 'react'

import { Button } from '@/components/button'
import {
  DEFAULT_NAVIGATION_MENU_TRIGGER_CLASSNAME,
  DEFAULT_NAVIGATION_MENU_TRIGGER_INDICATOR_CLASSNAME,
} from '@/components/navigation-menu/constants/constants'
import {
  NavigationMenuTriggerProps,
  NavigationMenuTriggerRef,
} from '@/components/navigation-menu/types/navigation-menu-trigger'

const NavigationMenuTrigger = React.forwardRef<
  NavigationMenuTriggerRef,
  NavigationMenuTriggerProps
>((props, ref) => {
  const {
    className,
    children,
    indicator,
    indicatorProps,
    onMouseEnter,
    onMouseLeave,
    hasIndicator = true,
    ...restProps
  } = props

  // aria hover event not always firing in combination with radix asChild, track manually with native event
  const [isHovered, setIsHovered] = React.useState(false)

  const { className: indicatorClassName, ...restIndicatorProps } = getOptionalObject(indicatorProps)

  const renderIndicator = () => {
    if (!hasIndicator) return null

    if (indicator) return indicator

    return (
      <ChevronDownIcon
        className={cn(DEFAULT_NAVIGATION_MENU_TRIGGER_INDICATOR_CLASSNAME, indicatorClassName)}
        aria-hidden='true'
        {...restIndicatorProps}
      />
    )
  }

  return (
    <NavigationMenuTriggerPrimitive ref={ref} asChild {...restProps}>
      <Button
        variant='plain'
        className={cn(DEFAULT_NAVIGATION_MENU_TRIGGER_CLASSNAME, className)}
        onMouseEnter={chain(onMouseEnter, () => setIsHovered(true))}
        onMouseLeave={chain(onMouseLeave, () => setIsHovered(false))}
        data-hover={isHovered}
      >
        {children}
        {renderIndicator()}
      </Button>
    </NavigationMenuTriggerPrimitive>
  )
})

NavigationMenuTrigger.displayName = 'NavigationMenuTrigger'

export { NavigationMenuTrigger }
