import { Cross2Icon, EyeOpenIcon } from '@radix-ui/react-icons'
import { Simplify } from '@renderui/types'

import { inputContainerClasses } from '@/components/_shared/classes/input-container-classes'
import { AsChildProp } from '@/components/_shared/types/as-child'
import { NonNullableVariantProps } from '@/components/_shared/types/variants'
import { Aria } from '@/components/aria'
import { ButtonProps } from '@/components/button'

type TextInputRef = HTMLInputElement

type TextInputHTMLProps = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'type' | 'children' | 'startContent' | 'endContent' | 'disabled' | 'readonly' | 'required'
>

type TextInputCustomProps = {
  type?: 'text' | 'password' | 'email' | 'search' | 'tel' | 'url'
  children?: React.ReactNode | ((value: string) => React.ReactNode)
  startContent?: React.ReactNode | ((value: string) => React.ReactNode)
  endContent?: React.ReactNode | ((value: string) => React.ReactNode)
  hasPasswordToggle?: boolean
  hasClearButton?: boolean
  hasClearButtonAlways?: boolean
  inputContainerProps?: React.ComponentPropsWithoutRef<typeof Aria>
  clearButtonProps?: ButtonProps
  clearButtonIconProps?: React.ComponentPropsWithoutRef<typeof Cross2Icon>
  isDisabled?: boolean
  isReadOnly?: boolean
  isInvalid?: boolean
  isRequired?: boolean
  passwordToggleProps?: ButtonProps
  passwordToggleIconProps?: React.ComponentPropsWithoutRef<typeof EyeOpenIcon>
  onClear?: () => void
  onValueChange?: (value: string) => void
}

type TextInputVariantProps = NonNullableVariantProps<typeof inputContainerClasses>

type TextInputProps = Simplify<
  TextInputHTMLProps & TextInputCustomProps & TextInputVariantProps & AsChildProp
>

export type { TextInputProps, TextInputRef }
