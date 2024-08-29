import type { Simplify } from '@/components/_shared/types/simplify'
import type { ToggleGroup } from '@/components/toggle-group/components/toggle-group'
import type React from 'react'

type RadioGroupPrimitive = typeof ToggleGroup

type RadioGroupPrimitiveProps = Omit<
	React.ComponentProps<RadioGroupPrimitive>,
	'children' | 'disabled' | 'readonly' | 'required' | 'type' | 'value' | 'onValueChange'
>

type RadioGroupCustomProps = {
	startContent?: React.ReactNode | ((value: unknown) => React.ReactNode)
	children?: React.ReactNode | ((value: unknown) => React.ReactNode)
	endContent?: React.ReactNode | ((value: unknown) => React.ReactNode)
	name?: string
	value?: string | number
	defaultValue?: string | number | undefined
	onValueChange?: (value: unknown) => void
	isDisabled?: boolean
	isReadOnly?: boolean
	isInvalid?: boolean
	isRequired?: boolean
}

type RadioGroupProps = Simplify<RadioGroupPrimitiveProps & RadioGroupCustomProps>

export type { RadioGroupProps }
