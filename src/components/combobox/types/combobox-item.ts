import type { Color } from '@/components/_shared/types/color'
import type { Simplify } from '@/components/_shared/types/simplify'
import type { CommandItemProps } from '@/components/command/types/command-item'

type ComboboxItemCommandItemProps = Omit<CommandItemProps, 'value' | 'children' | 'color'>

type ComboboxItemCustomProps = {
	value: string | number
	children: React.ReactNode
	color?: Color
	startContent?: React.ReactNode
	endContent?: React.ReactNode
}

type ComboboxItemProps = Simplify<ComboboxItemCommandItemProps & ComboboxItemCustomProps>

export type { ComboboxItemProps }
