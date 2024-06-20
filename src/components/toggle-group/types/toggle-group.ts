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
  type?: 'single' | 'multiple'
  value?: string[] | number[]
  defaultValue?: string[] | number[]
  onValueChange?: (value: string[] | number[] | undefined) => void
}

type ToggleGroupProps = Simplify<ToggleGroupPrimitiveProps & ToggleGroupCustomProps>

export type { ToggleGroupProps, ToggleGroupRef }
