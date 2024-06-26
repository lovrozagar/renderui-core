import { Simplify } from '@renderui/types'
import React from 'react'

import { inputContainerClasses } from '@/components/_shared/classes/input-container-classes'
import { AsChildProp } from '@/components/_shared/types/as-child'
import { NonNullableVariantProps } from '@/components/_shared/types/variants'
import { Aria } from '@/components/aria'
import { ButtonProps } from '@/components/button'
import { SeparatorProps } from '@/components/separator'

type NumberInputRef = React.ElementRef<'input'>

type NumberInputPrimitiveProps = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'children' | 'disabled' | 'readonly' | 'required'
>

type NumberInputCustomProps = {
  isRequired?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
  isReadOnly?: boolean
  hasSpinButtons?: boolean
  children?: React.ReactNode | ((value: string) => React.ReactNode)
  startContent?: React.ReactNode | ((value: string) => React.ReactNode)
  endContent?: React.ReactNode | ((value: string) => React.ReactNode)
  inputContainerProps?: React.ComponentPropsWithoutRef<typeof Aria>
  spinButtonContainerProps?: Simplify<React.ComponentPropsWithoutRef<'div'> & AsChildProp>
  incrementButtonProps?: ButtonProps
  decrementButtonProps?: ButtonProps
  separatorProps?: SeparatorProps
  onValueChange?: (value: string | undefined) => void
  onSpin?: (value: string | undefined) => void
  onSpinIncrement?: (value: string | undefined) => void
  onSpinDecrement?: (value: string | undefined) => void
}

type NumberInputVariantProps = NonNullableVariantProps<typeof inputContainerClasses>

type NumberInputProps = Simplify<
  NumberInputPrimitiveProps & NumberInputCustomProps & NumberInputVariantProps & AsChildProp
>

export type { NumberInputProps, NumberInputRef }
