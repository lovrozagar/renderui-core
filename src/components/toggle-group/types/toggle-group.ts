import { ToggleGroup as ToggleGroupPrimitive } from '@radix-ui/react-toggle-group'
import { Simplify } from '@/components/_shared/types/simplify'
import React from 'react'

type ToggleGroupPrimitiveType = typeof ToggleGroupPrimitive

type ToggleGroupRef = React.ElementRef<ToggleGroupPrimitiveType>

type ToggleGroupPrimitiveProps = Omit<
  React.ComponentPropsWithoutRef<ToggleGroupPrimitiveType>,
  'value' | 'defaultValue' | 'onValueChange' | 'type'
>

type ToggleGroupCustomSingleProps = {
  type?: 'single'
  value?: string | number
  defaultValue?: string | number
  onValueChange?: (value: string | number | undefined) => void
}

type ToggleGroupCustomMultipleProps = {
  type?: 'multiple'
  value?: string[] | number[]
  defaultValue?: string[] | number[]
  onValueChange?: (value: string[] | number[] | undefined) => void
}

type ToggleGroupProps = Simplify<
  ToggleGroupPrimitiveProps & (ToggleGroupCustomSingleProps | ToggleGroupCustomMultipleProps)
>

export type { ToggleGroupProps, ToggleGroupRef }
