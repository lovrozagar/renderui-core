import { Simplify } from '@/components/_shared/types/simplify'

import { inputContainerClasses } from '@/components/_shared/classes/input-container-classes'
import { CrossSmallIcon } from '@/components/_shared/components/icons/cross-small-icon'
import { EyeOpenIcon } from '@/components/_shared/components/icons/eye-open-icon'
import { AsChildProp } from '@/components/_shared/types/as-child'
import { NonNullableVariantProps } from '@/components/_shared/types/variants'
import { Aria } from '@/components/aria'
import { ButtonProps } from '@/components/button'

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
