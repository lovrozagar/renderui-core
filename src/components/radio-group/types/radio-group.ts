import { Simplify } from '@renderui/types'
import React from 'react'

import { ToggleGroup } from '@/components/toggle-group'

type RadioGroupPrimitive = typeof ToggleGroup

type RadioGroupRef = React.ElementRef<RadioGroupPrimitive>

type RadioGroupPrimitiveProps = Omit<
  React.ComponentProps<RadioGroupPrimitive>,
  'children' | 'disabled' | 'readonly' | 'required'
>

type RadioGroupCustomProps = {
  startContent?: React.ReactNode | ((value: string | number | undefined) => React.ReactNode)
  children?: React.ReactNode | ((value: string | number | undefined) => React.ReactNode)
  endContent?: React.ReactNode | ((value: string | number | undefined) => React.ReactNode)
  name?: string
  value?: string
  defaultValue?: string | number | undefined
  onValueChange?: (value: string | number | undefined) => void
  isDisabled?: boolean
  isReadOnly?: boolean
  isInvalid?: boolean
  isRequired?: boolean
}

type RadioGroupProps = Simplify<RadioGroupPrimitiveProps & RadioGroupCustomProps>

export type { RadioGroupProps, RadioGroupRef }
