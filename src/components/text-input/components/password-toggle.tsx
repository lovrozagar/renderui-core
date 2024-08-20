import { cn, getOptionalObject } from '@renderui/utils'
import React from 'react'

import { EyeNoneIcon } from '@/components/_shared/components/icons/eye-none-icon'
import { EyeOpenIcon } from '@/components/_shared/components/icons/eye-open-icon'
import { Button } from '@/components/button'
import {
	DEFAULT_TEXT_INPUT_BASE_PASSWORD_TOGGLE_ICON_CLASSNAME,
	DEFAULT_TEXT_INPUT_PASSWORD_TOGGLE_CLASSNAME,
} from '@/components/text-input/constants/constants'
import { PasswordToggleProps } from '@/components/text-input/types/password-toggle'

const PasswordToggle = (props: PasswordToggleProps) => {
	const { className, type, variant = 'plain', passwordToggleIconProps, ...restProps } = props

	const { className: passwordToggleIconClassName, ...restPasswordToggleIconProps } =
		getOptionalObject(passwordToggleIconProps)

	return (
		<Button
			variant={variant}
			className={cn(DEFAULT_TEXT_INPUT_PASSWORD_TOGGLE_CLASSNAME, className)}
			{...restProps}
		>
			<EyeOpenIcon
				className={cn(
					DEFAULT_TEXT_INPUT_BASE_PASSWORD_TOGGLE_ICON_CLASSNAME,
					type === 'password' ? 'opacity-100' : 'opacity-0',
					passwordToggleIconClassName,
				)}
				{...restPasswordToggleIconProps}
			/>
			<EyeNoneIcon
				className={cn(
					DEFAULT_TEXT_INPUT_BASE_PASSWORD_TOGGLE_ICON_CLASSNAME,
					type === 'password' ? 'opacity-0' : 'opacity-100',
					passwordToggleIconClassName,
				)}
				{...restPasswordToggleIconProps}
			/>
		</Button>
	)
}

export { PasswordToggle }
