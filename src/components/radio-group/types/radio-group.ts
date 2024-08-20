import { Simplify } from '@/components/_shared/types/simplify'
import React from 'react'

import { ToggleGroup } from '@/components/toggle-group'

type RadioGroupPrimitive = typeof ToggleGroup

type RadioGroupPrimitiveProps = Omit<
	React.ComponentProps<RadioGroupPrimitive>,
	'children' | 'disabled' | 'readonly' | 'required' | 'type' | 'value' | 'onValueChange'
>

type RadioGroupCustomProps = {
	startContent?: React.ReactNode | ((value: any) => React.ReactNode)
	children?: React.ReactNode | ((value: any) => React.ReactNode)
	endContent?: React.ReactNode | ((value: any) => React.ReactNode)
	name?: string
	value?: string | number
	defaultValue?: string | number | undefined
	onValueChange?: (value: any) => void
	isDisabled?: boolean
	isReadOnly?: boolean
	isInvalid?: boolean
	isRequired?: boolean
}

type RadioGroupProps = Simplify<RadioGroupPrimitiveProps & RadioGroupCustomProps>

export type { RadioGroupProps }
