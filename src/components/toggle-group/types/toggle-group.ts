import { ToggleGroup as ToggleGroupPrimitive } from '@radix-ui/react-toggle-group'
import { Simplify } from '@/components/_shared/types/simplify'
import React, { ReactNode } from 'react'

type ToggleGroupPrimitiveType = typeof ToggleGroupPrimitive

type ToggleGroupRef = React.ElementRef<ToggleGroupPrimitiveType>

type ToggleGroupPrimitiveProps = Omit<
  React.ComponentPropsWithoutRef<ToggleGroupPrimitiveType>,
  'value' | 'defaultValue' | 'onValueChange' | 'type'
>

type ToggleGroupCustomSingleProps = {
  type: 'single'
  value?: string | number
  defaultValue?: string | number
}

type ToggleGroupCustomMultipleProps = {
  type: 'multiple'
  value?: string[] | number[]
  defaultValue?: string[] | number[]
}

type ToggleGroupCustomBaseProps = {
  onValueChange?: (value: any) => void
  children?:
    | (({ value, onValueChange }: { value: any; onValueChange: React.Dispatch<any> }) => ReactNode)
    | ReactNode
}

type ToggleGroupProps = Simplify<
  ToggleGroupPrimitiveProps &
    (ToggleGroupCustomSingleProps | ToggleGroupCustomMultipleProps) &
    ToggleGroupCustomBaseProps
>

export type { ToggleGroupProps, ToggleGroupRef }
