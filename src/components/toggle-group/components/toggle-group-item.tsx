'use client'

import { ToggleGroupItem as ToggleGroupItemPrimitive } from '@radix-ui/react-toggle-group'
import { cn } from '@renderui/utils/cn'
import { functionCallOrValue } from '@renderui/utils/function-call-or-value'
import React from 'react'

import { Button } from '@/components/button'
import { useToggleGroupContext } from '@/components/toggle-group/contexts/toggle-group-context'
import {
  ToggleGroupItemProps,
  ToggleGroupItemRef,
} from '@/components/toggle-group/types/toggle-group-item'
import {
  DEFAUL_TOGGLE_CLASSNAME,
  TOGGLED_OFF_RING_CLASSNAME,
} from '@/components/toggle/constants/constants'

const ToggleGroupItem = React.forwardRef<ToggleGroupItemRef, ToggleGroupItemProps>((props, ref) => {
  const {
    value,
    className,
    children,
    variant,
    hasRipple = false,
    hasToggledOffRing = false,
    color = 'primary',
    ...restProps
  } = props

  const { value: rootValue } = useToggleGroupContext()

  const isOn = Array.isArray(rootValue)
    ? Boolean(rootValue.includes(value as never))
    : value.toString() === rootValue.toString()

  return (
    <ToggleGroupItemPrimitive asChild value={value as string}>
      <Button
        ref={ref}
        data-slot='item'
        color={color}
        variant={variant ?? (isOn ? 'solid' : 'plain')}
        hasRipple={hasRipple}
        className={cn(
          DEFAUL_TOGGLE_CLASSNAME,
          hasToggledOffRing ? TOGGLED_OFF_RING_CLASSNAME : undefined,
          className,
        )}
        data-state={isOn ? 'on' : 'off'}
        {...restProps}
      >
        {functionCallOrValue(children, { isOn })}
      </Button>
    </ToggleGroupItemPrimitive>
  )
})

ToggleGroupItem.displayName = 'ToggleGroupItem'

export { ToggleGroupItem }
