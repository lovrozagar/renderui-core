import type { Simplify } from '@/components/_shared/types/simplify'

import type { EyeOpenIcon } from '@/components/_shared/components/icons/eye-open-icon'
import type { ButtonProps } from '@/components/button/types/button'

type PasswordToggleCustomProps = {
	type: React.ComponentPropsWithRef<'input'>['type']
	passwordToggleIconProps?: React.ComponentPropsWithRef<typeof EyeOpenIcon>
}

type PasswordToggleProps = Simplify<Omit<ButtonProps, 'type'> & PasswordToggleCustomProps>

export type { PasswordToggleProps }
