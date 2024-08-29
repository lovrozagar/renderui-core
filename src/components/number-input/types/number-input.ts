import type { Simplify } from '@/components/_shared/types/simplify'
import type React from 'react'

import type { inputContainerClasses } from '@/components/_shared/classes/input-container-classes'
import type { AsChildProp } from '@/components/_shared/types/as-child'
import type { NonNullableVariantProps } from '@/components/_shared/types/variants'
import type { ButtonProps } from '@/components/button'
import type { SeparatorProps } from '@/components/separator/types/separator'
import type { Aria } from '@/components/aria/components/aria'

type NumberInputPrimitiveProps = Omit<
	React.ComponentPropsWithRef<'input'>,
	'children' | 'disabled' | 'readonly' | 'required'
>

type NumberInputCustomProps = {
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
