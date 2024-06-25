import { Simplify } from '@renderui/types'

import { EyeOpenIcon } from '@/components/_shared/components/icons/eye-open-icon'
import { ButtonProps } from '@/components/button'

type PasswordToggleCustomProps = {
  type: React.ComponentPropsWithoutRef<'input'>['type']
  passwordToggleIconProps?: React.ComponentPropsWithoutRef<typeof EyeOpenIcon>
}

type PasswordToggleProps = Simplify<Omit<ButtonProps, 'type'> & PasswordToggleCustomProps>

export type { PasswordToggleProps }
