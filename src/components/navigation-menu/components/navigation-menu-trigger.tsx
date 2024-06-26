'use client'

import { NavigationMenuTrigger as NavigationMenuTriggerPrimitive } from '@radix-ui/react-navigation-menu'
import { chain, cn } from '@renderui/utils'
import React, { useCallback } from 'react'

import { Button } from '@/components/button'
import { NavigationMenuTriggerIndicator } from '@/components/navigation-menu/components/navigation-menu-trigger-indicator'
import { DEFAULT_NAVIGATION_MENU_TRIGGER_CLASSNAME } from '@/components/navigation-menu/constants/constants'
import {
  NavigationMenuTriggerProps,
  NavigationMenuTriggerRef,
} from '@/components/navigation-menu/types/navigation-menu-trigger'

const NavigationMenuTrigger = React.forwardRef<
  NavigationMenuTriggerRef,
  NavigationMenuTriggerProps
>((props, ref) => {
  const {
    asChild,
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

  const renderIndicator = useCallback(() => {
    if (!hasIndicator) return null

    if (indicator) return indicator

    return <NavigationMenuTriggerIndicator aria-hidden='true' {...indicatorProps} />
  }, [hasIndicator, indicator, indicatorProps])

  const renderChildren = useCallback(() => {
    if (asChild) {
      return typeof children === 'function'
        ? children({ Indicator: NavigationMenuTriggerIndicator, indicatorProps })
        : children
    }

    return typeof children === 'function' ? (
      children({ Indicator: NavigationMenuTriggerIndicator, indicatorProps })
    ) : (
      <>
        {children}
        {renderIndicator()}
      </>
    )
  }, [children, indicatorProps])

  return (
    <NavigationMenuTriggerPrimitive asChild>
      <Button
        variant='plain'
        ref={ref}
        asChild={asChild}
        className={cn(DEFAULT_NAVIGATION_MENU_TRIGGER_CLASSNAME, className)}
        onMouseEnter={chain(onMouseEnter, () => setIsHovered(true))}
        onMouseLeave={chain(onMouseLeave, () => setIsHovered(false))}
        data-hover={isHovered}
        {...restProps}
      >
        {renderChildren()}
      </Button>
    </NavigationMenuTriggerPrimitive>
  )
})

NavigationMenuTrigger.displayName = 'NavigationMenuTrigger'

export { NavigationMenuTrigger }
