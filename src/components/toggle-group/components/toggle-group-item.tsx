'use client'

import { ToggleGroupItem as ToggleGroupItemPrimitive } from '@radix-ui/react-toggle-group'
import { cn } from '@renderui/utils'
import React from 'react'

import { Button } from '@/components/button'
import { DEFAUL_TOGGLE_CLASSNAME } from '@/components/toggle/constants/constants'
import { useToggleGroupContext } from '@/components/toggle-group/contexts/toggle-group-context'
import {
  ToggleGroupItemProps,
  ToggleGroupItemRef,
} from '@/components/toggle-group/types/toggle-group-item'

const ToggleGroupItem = React.forwardRef<ToggleGroupItemRef, ToggleGroupItemProps>((props, ref) => {
  const {
    value,
    className,
    children,
    variant,
    hasRipple = false,
    color = 'primary',
    ...restProps
  } = props

  const { value: rootValue } = useToggleGroupContext()

  return (
    <ToggleGroupItemPrimitive asChild value={value as string} className={cn(className)}>
      <Button
        ref={ref}
        color={color}
        variant={variant ?? (rootValue?.includes(value as never) ? 'solid' : 'plain')}
        hasRipple={hasRipple}
        className={cn(DEFAUL_TOGGLE_CLASSNAME, className)}
        {...restProps}
      >
        {children}
      </Button>
    </ToggleGroupItemPrimitive>
  )
})

ToggleGroupItem.displayName = 'ToggleGroupItem'

export { ToggleGroupItem }
