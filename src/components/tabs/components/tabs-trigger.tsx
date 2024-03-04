'use client'

import { TabsTrigger as TabsTriggerPrimitive } from '@radix-ui/react-tabs'
import { cn, cx, getOptionalObject } from '@renderui/utils'
import React from 'react'
import { chain } from 'react-aria'

import { Button } from '@/components/button'
import { TabsCursor } from '@/components/tabs/components/tabs-cursor'
import {
  DEFAULT_TABS_TRIGGER_CHILDREN_CONTAINER_CLASSNAME,
  DEFAULT_TABS_TRIGGER_CLASSNAME,
  INACTIVE_TABS_TRIGGER_CLASSNAME,
  NO_BORDER_RADIUS_ON_TRIGGER_VARIANTS,
  NO_BORDER_RADIUS_TABS_TRIGGER_CLASSNAME,
} from '@/components/tabs/constants/constants'
import { useTabsContext } from '@/components/tabs/context/tabs-context'
import { TabsTriggerProps, TabsTriggerRef } from '@/components/tabs/types/tabs-trigger'
import { getHandleTriggerPress } from '@/components/tabs/utils/get-handdle-trigger-press'

const TabsTrigger = React.forwardRef<TabsTriggerRef, TabsTriggerProps>((props, ref) => {
  const {
    value,
    className,
    children,
    color,
    isDisabled,
    childrenContainerProps,
    onPress,
    variant = 'solid',
    hasRipple = false,
    hasDefaultHoverStyles = false,
    hasDefaultPressedStyles = false,
    ...restProps
  } = props

  const { className: childrenContainerClassName, ...restChildrenContainerProps } =
    getOptionalObject(childrenContainerProps)

  const { activeTab, color: rootColor, variant: rootVariant, type, setActiveTab } = useTabsContext()

  const isActive = activeTab === value

  return (
    <TabsTriggerPrimitive asChild disabled={isDisabled} value={value}>
      <Button
        ref={ref}
        data-slot='trigger'
        color={color ?? rootColor}
        variant={variant}
        hasRipple={hasRipple}
        hasDefaultHoverStyles={hasDefaultHoverStyles}
        hasDefaultPressedStyles={hasDefaultPressedStyles}
        onPress={chain(onPress, getHandleTriggerPress(type, value, setActiveTab))}
        className={cx(
          DEFAULT_TABS_TRIGGER_CLASSNAME,
          isActive ? '' : INACTIVE_TABS_TRIGGER_CLASSNAME,
          NO_BORDER_RADIUS_ON_TRIGGER_VARIANTS.includes(rootVariant)
            ? NO_BORDER_RADIUS_TABS_TRIGGER_CLASSNAME
            : '',
          className,
        )}
        {...restProps}
      >
        <span
          data-slot='trigger-children-container'
          className={cn(
            DEFAULT_TABS_TRIGGER_CHILDREN_CONTAINER_CLASSNAME,
            childrenContainerClassName,
          )}
          {...restChildrenContainerProps}
        >
          {children}
        </span>
        <span aria-hidden className='invisible'>
          {children}
        </span>
        {isActive ? <TabsCursor /> : null}
      </Button>
    </TabsTriggerPrimitive>
  )
})

TabsTrigger.displayName = 'TabsTrigger'

export { TabsTrigger }
