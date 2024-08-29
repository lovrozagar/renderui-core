import type { Simplify } from '@/components/_shared/types/simplify'

import type { inputContainerClasses } from '@/components/_shared/classes/input-container-classes'
import type { CrossSmallIcon } from '@/components/_shared/components/icons/cross-small-icon'
import type { EyeOpenIcon } from '@/components/_shared/components/icons/eye-open-icon'
import type { AsChildProp } from '@/components/_shared/types/as-child'
import type { NonNullableVariantProps } from '@/components/_shared/types/variants'
import type { ButtonProps } from '@/components/button'
import type { Aria } from '@/components/aria/components/aria'

type TextInputRef = HTMLInputElement

type TextInputHTMLProps = Omit<
	React.ComponentPropsWithRef<'input'>,
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
