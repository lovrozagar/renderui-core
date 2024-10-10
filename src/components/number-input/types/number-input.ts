import type { Simplify } from '@/components/_shared/types/simplify'
import type React from 'react'

import type { inputContainerClasses } from '@/components/_shared/classes/input-container-classes'
import type { AsChildProp } from '@/components/_shared/types/as-child'
import type { NonNullableVariantProps } from '@/components/_shared/types/variant'
import type { Aria } from '@/components/aria/components/aria'
import type { ButtonProps } from '@/components/button/types/button'
import type { SeparatorProps } from '@/components/separator/types/separator'
import type { Color } from '@/components/_shared/types/color'

type NumberInputPrimitiveProps = Omit<
	React.ComponentPropsWithRef<'input'>,
	'color' | 'children' | 'disabled' | 'readonly' | 'required'
>

type NumberInputCustomProps = {
	color?: Color
	isRequired?: boolean
	isDisabled?: boolean
	isInvalid?: boolean
	isReadOnly?: boolean
	hasSpinButtons?: boolean
	children?: React.ReactNode | ((value: string) => React.ReactNode)
	startContent?: React.ReactNode | ((value: string) => React.ReactNode)
	endContent?: React.ReactNode | ((value: string) => React.ReactNode)
	inputContainerProps?: React.ComponentPropsWithRef<typeof Aria>
	spinButtonContainerProps?: Simplify<React.ComponentPropsWithRef<'div'> & AsChildProp>
	incrementButtonProps?: ButtonProps
	decrementButtonProps?: ButtonProps
	separatorProps?: SeparatorProps
	onValueChange?: (value: string | undefined) => void
	onSpin?: (value: string | undefined) => void
	onSpinIncrement?: (value: string | undefined) => void
	onSpinDecrement?: (value: string | undefined) => void
}

type NumberInputVariantProps = NonNullableVariantProps<typeof inputContainerClasses>

type NumberInputProps = Simplify<
	NumberInputPrimitiveProps & NumberInputCustomProps & NumberInputVariantProps & AsChildProp
>

export type { NumberInputProps }
