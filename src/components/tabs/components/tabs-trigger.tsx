'use client'

import { TabsTrigger as TabsTriggerPrimitive } from '@radix-ui/react-tabs'
import { cx, functionCallOrValue, getOptionalObject } from '@renderui/utils'
import React from 'react'
import { chain } from 'react-aria'

import { Button } from '@/components/button'
import { TabsCursor } from '@/components/tabs/components/tabs-cursor'
import { TabsTriggerChildrenContainer } from '@/components/tabs/components/tabs-trigger-children-container'
import {
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
    asChild,
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

  const {
    activeTab,
    color: rootColor,
    variant: rootVariant,
    type,
    hasCursor,
    setActiveTab,
  } = useTabsContext()

  const isSelected = activeTab === value

  return (
    <TabsTriggerPrimitive asChild disabled={isDisabled} value={value as string}>
      <Button
        asChild={asChild}
        ref={ref}
        data-slot='trigger'
        data-selected={isSelected}
        color={color ?? rootColor}
        variant={variant}
        hasRipple={hasRipple}
        hasDefaultHoverStyles={hasDefaultHoverStyles}
        hasDefaultPressedStyles={hasDefaultPressedStyles}
        onPress={chain(
          onPress,
          getHandleTriggerPress(type, value as string | number, setActiveTab),
        )}
        className={cx(
          DEFAULT_TABS_TRIGGER_CLASSNAME,
          isSelected ? undefined : INACTIVE_TABS_TRIGGER_CLASSNAME,
          NO_BORDER_RADIUS_ON_TRIGGER_VARIANTS.includes(rootVariant)
            ? NO_BORDER_RADIUS_TABS_TRIGGER_CLASSNAME
            : undefined,
          className,
        )}
        {...restProps}
      >
        {asChild ? (
          functionCallOrValue(children, {
            isSelected,
            ChildrenContainer: TabsTriggerChildrenContainer,
            Cursor: TabsCursor,
          })
        ) : (
          <>
            <TabsTriggerChildrenContainer
              className={childrenContainerClassName}
              {...restChildrenContainerProps}
            >
              {functionCallOrValue(children, {
                isSelected,
                ChildrenContainer: TabsTriggerChildrenContainer,
                Cursor: TabsCursor,
              })}
            </TabsTriggerChildrenContainer>
            {hasCursor && isSelected ? <TabsCursor /> : null}
          </>
        )}
      </Button>
    </TabsTriggerPrimitive>
  )
})

TabsTrigger.displayName = 'TabsTrigger'

export { TabsTrigger }
