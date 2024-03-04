import { Simplify } from '@renderui/types'

import { AsChildProp } from '@/components/_shared/types/as-child'
import { ButtonProps, ButtonRef } from '@/components/button'

type SwitchRef = ButtonRef

type SwitchButtonProps = Omit<
  ButtonProps,
  'children' | 'disabled' | 'readonly' | 'required' | 'startContent' | 'children' | 'endContent'
>

type SwitchCustomProps = {
  startContent?: React.ReactNode | ((checked: boolean) => React.ReactNode)
  children?: React.ReactNode | ((checked: boolean) => React.ReactNode)
  endContent?: React.ReactNode | ((checked: boolean) => React.ReactNode)
  inputRef?: React.Ref<HTMLInputElement>
  inputProps?: Simplify<React.InputHTMLAttributes<HTMLInputElement> & AsChildProp>
  name?: string
  defaultChecked?: boolean
  isChecked?: boolean
  isDisabled?: boolean
  isReadOnly?: boolean
  isInvalid?: boolean
  isRequired?: boolean
  hasDefaultPressedStyles?: boolean
  onCheckedChange?: (checked: boolean) => void
  onPress?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

type SwitchProps = Simplify<SwitchButtonProps & SwitchCustomProps>

export type { SwitchProps, SwitchRef }
