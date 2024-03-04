import { Primitive as primitive } from '@radix-ui/react-primitive'
import { Simplify } from '@renderui/types'
import React from 'react'

import { AsChildProp } from '@/components/_shared/types/as-child'
import { ButtonProps, ButtonRef } from '@/components/button'

type CheckboxRef = ButtonRef

type CheckboxButtonProps = Omit<
  ButtonProps,
  'children' | 'disabled' | 'readonly' | 'required' | 'startContent' | 'children' | 'endContent'
>

type CheckboxCustomProps = {
  children?: React.ReactNode | ((checked: boolean) => React.ReactNode)
  startContent?: React.ReactNode | ((checked: boolean) => React.ReactNode)
  endContent?: React.ReactNode | ((checked: boolean) => React.ReactNode)
  inputRef?: React.RefObject<HTMLInputElement>
  inputProps?: Simplify<React.ComponentPropsWithoutRef<typeof primitive.input> & AsChildProp>
  name?: string
  isChecked?: boolean
  isReadOnly?: boolean
  isInvalid?: boolean
  isRequired?: boolean
  defaultChecked?: boolean
  onCheckedChange?: React.Dispatch<React.SetStateAction<boolean | undefined>>
  hasIconContentWhenUnchecked?: boolean
}

type CheckboxProps = Simplify<CheckboxButtonProps & CheckboxCustomProps>

export type { CheckboxProps, CheckboxRef }
