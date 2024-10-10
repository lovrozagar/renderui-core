import type { Color } from '@/components/_shared/types/color'
import type { Simplify } from '@/components/_shared/types/simplify'
import type { ToggleGroup as ToggleGroupPrimitive } from '@radix-ui/react-toggle-group'
import type React from 'react'

type ToggleGroupPrimitiveType = typeof ToggleGroupPrimitive

type ToggleGroupPrimitiveProps = Omit<
	React.ComponentPropsWithRef<ToggleGroupPrimitiveType>,
	'value' | 'defaultValue' | 'onValueChange' | 'type' | 'color'
>

type ToggleGroupCustomSingleProps = {
	type: 'single'
	value?: string | number
	defaultValue?: string | number
}

type ToggleGroupCustomMultipleProps = {
	type: 'multiple'
	value?: string[] | number[]
	defaultValue?: string[] | number[]
}

type ToggleGroupCustomBaseProps = {
	color?: Color
	onValueChange?: (value: unknown) => void
	children?:
		| (({
				value,
				onValueChange,
		  }: {
				value: unknown
				onValueChange: React.Dispatch<unknown>
		  }) => React.ReactNode)
		| React.ReactNode
}

type ToggleGroupProps = Simplify<
	ToggleGroupPrimitiveProps &
		(ToggleGroupCustomSingleProps | ToggleGroupCustomMultipleProps) &
		ToggleGroupCustomBaseProps
>

export type { ToggleGroupProps }
