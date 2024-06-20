'use client'

import { ToggleGroup as ToggleGroupPrimitive } from '@radix-ui/react-toggle-group'
import { useControllableState } from '@renderui/hooks'
import { cn, functionCallOrValue } from '@renderui/utils'
import React from 'react'

import { DEFAULT_TOGGLE_GROUP_CLASSNAME } from '@/components/toggle-group/constants/constants'
import { ToggleGroupProvider } from '@/components/toggle-group/contexts/toggle-group-context'
import { ToggleGroupProps, ToggleGroupRef } from '@/components/toggle-group/types/toggle-group'
import { EMPTY_ARRAY } from '@renderui/constants'

const ToggleGroup = React.forwardRef<ToggleGroupRef, ToggleGroupProps>((props, ref) => {
  const {
    onValueChange: onValueChangeProp,
    value: valueProp,
    className,
    children,
    defaultValue = EMPTY_ARRAY as string[],
    type = 'multiple',
    ...restProps
  } = props

  const [value, onValueChange] = useControllableState<string[] | number[]>({
    onChange: onValueChangeProp,
    defaultProp: defaultValue,
    prop: valueProp,
  })

  return (
    <ToggleGroupPrimitive
      ref={ref}
      value={value as string[] | undefined}
      type={type as 'multiple'}
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
