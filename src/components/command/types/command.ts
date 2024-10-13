import type { Color } from '@/components/_shared/types/color'
import type { Simplify } from '@/components/_shared/types/simplify'
import type { Command as CommandPrimitive } from 'cmdk'
import type React from 'react'

type CommandPrimitiveType = typeof CommandPrimitive

type CommandPrimitiveProps = Omit<
	React.ComponentPropsWithRef<CommandPrimitiveType>,
	'color' | 'onSelect'
>

type CommandCustomProps = {
	type?: 'select' | 'combobox'
	color?: Color
	onSelect?: (value: unknown) => void
}

type CommandProps = Simplify<CommandPrimitiveProps & CommandCustomProps>

export type { CommandProps }
