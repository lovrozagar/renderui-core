import { ToggleGroup as ToggleGroupPrimitive } from '@radix-ui/react-toggle-group'
import { Simplify } from '@renderui/types'
import React from 'react'

type ToggleGroupPrimitiveType = typeof ToggleGroupPrimitive

type ToggleGroupRef = React.ElementRef<ToggleGroupPrimitiveType>

type ToggleGroupPrimitiveProps = Omit<
  React.ComponentPropsWithoutRef<ToggleGroupPrimitiveType>,
  'value' | 'defaultValue' | 'onValueChange' | 'type'
>

type ToggleGroupCustomProps = {
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
}

type ToggleGroupProps = Simplify<ToggleGroupPrimitiveProps & ToggleGroupCustomProps>

export type { ToggleGroupProps, ToggleGroupRef }
