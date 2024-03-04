'use client'

import { ToggleGroup as ToggleGroupPrimitive } from '@radix-ui/react-toggle-group'
import { useControllableState } from '@renderui/hooks'
import { cn, functionCallOrValue } from '@renderui/utils'
import React from 'react'

import { DEFAULT_TOGGLE_GROUP_CLASSNAME } from '@/components/toggle-group/constants/constants'
import { ToggleGroupProvider } from '@/components/toggle-group/contexts/toggle-group-context'
import { ToggleGroupProps, ToggleGroupRef } from '@/components/toggle-group/types/toggle-group'

const ToggleGroup = React.forwardRef<ToggleGroupRef, ToggleGroupProps>((props, ref) => {
  const {
    onValueChange: onValueChangeProp,
    value: valueProp,
    defaultValue,
    className,
    children,
    ...restProps
  } = props

  const [value, onValueChange] = useControllableState<ToggleGroupProps['value']>({
    onChange: onValueChangeProp as ((state: ToggleGroupProps['value']) => void) | undefined,
    defaultProp: defaultValue,
    prop: valueProp,
  })

  return (
    <ToggleGroupPrimitive
      ref={ref}
      type='multiple'
      value={value}
      onValueChange={onValueChange}
      className={cn(DEFAULT_TOGGLE_GROUP_CLASSNAME, className)}
      {...restProps}
    >
      <ToggleGroupProvider value={{ value }}>
        {functionCallOrValue(children, { value, onValueChange })}
      </ToggleGroupProvider>
    </ToggleGroupPrimitive>
  )
})

ToggleGroup.displayName = 'ToggleGroup'

export { ToggleGroup }
