'use client'

import { ToggleGroup as ToggleGroupPrimitive } from '@radix-ui/react-toggle-group'
import { cn, functionCallOrValue } from '@renderui/utils'
import React, { useState } from 'react'

import { EMPTY_ARRAY } from '@/components/_shared/constants/constants'
<<<<<<< HEAD
import { useControllableState } from '@/components/_shared/hooks/use-controllable-state'
=======
>>>>>>> d68c9fe (refactor: internal hook rewrite, update deps)
import { DEFAULT_TOGGLE_GROUP_CLASSNAME } from '@/components/toggle-group/constants/constants'
import { ToggleGroupProvider } from '@/components/toggle-group/contexts/toggle-group-context'
import { ToggleGroupProps, ToggleGroupRef } from '@/components/toggle-group/types/toggle-group'

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

  const [value, onValueChange] = useState(valueProp ?? defaultValue)

  return (
    <ToggleGroupPrimitive
      ref={ref}
      data-slot='group'
      value={value as any}
      type={type as any}
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
