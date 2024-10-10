import type { Simplify } from '@/components/_shared/types/simplify'

import type { inputContainerClasses } from '@/components/_shared/classes/input-container-classes'
import type { CrossSmallIcon } from '@/components/_shared/components/icons/cross-small-icon'
import type { EyeOpenIcon } from '@/components/_shared/components/icons/eye-open-icon'
import type { AsChildProp } from '@/components/_shared/types/as-child'
import type { NonNullableVariantProps } from '@/components/_shared/types/variant'
import type { Aria } from '@/components/aria/components/aria'
import type { ButtonProps } from '@/components/button/types/button'
import type { Color } from '@/components/_shared/types/color'

type TextInputRef = HTMLInputElement

type TextInputHTMLProps = Omit<
	React.ComponentPropsWithRef<'input'>,
	| 'type'
	| 'color'
	| 'children'
	| 'startContent'
	| 'endContent'
	| 'disabled'
	| 'readonly'
	| 'required'
>

type TextInputCustomProps = {
	type?: 'text' | 'password' | 'email' | 'search' | 'tel' | 'url'
	color?: Color
	children?: React.ReactNode | ((value: string) => React.ReactNode)
	startContent?: React.ReactNode | ((value: string) => React.ReactNode)
	endContent?: React.ReactNode | ((value: string) => React.ReactNode)
	hasPasswordToggle?: boolean
	hasClearButton?: boolean
	hasClearButtonAlways?: boolean
	inputContainerProps?: React.ComponentPropsWithRef<typeof Aria>
	clearButtonProps?: ButtonProps
	clearButtonIconProps?: React.ComponentPropsWithRef<typeof CrossSmallIcon>
	isDisabled?: boolean
	isReadOnly?: boolean
	isInvalid?: boolean
	isRequired?: boolean
	passwordToggleProps?: ButtonProps
	passwordToggleIconProps?: React.ComponentPropsWithRef<typeof EyeOpenIcon>
	onClear?: () => void
	onValueChange?: (value: string) => void
}

type TextInputVariantProps = NonNullableVariantProps<typeof inputContainerClasses>

type TextInputProps = Simplify<
	TextInputHTMLProps & TextInputCustomProps & TextInputVariantProps & AsChildProp
>

export type { TextInputProps, TextInputRef }
