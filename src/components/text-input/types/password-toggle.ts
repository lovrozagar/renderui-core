import { EyeOpenIcon } from '@radix-ui/react-icons'
import { Simplify } from '@renderui/types'

import { ButtonProps } from '@/components/button'


type PasswordToggleCustomProps = {
  isPassword: boolean | undefined
  passwordToggleIconProps?: React.ComponentPropsWithoutRef<typeof EyeOpenIcon>
}

type PasswordToggleProps = Simplify<ButtonProps & PasswordToggleCustomProps>

export type { PasswordToggleProps }
