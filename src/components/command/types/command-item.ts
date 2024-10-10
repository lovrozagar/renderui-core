import type { Color } from '@/components/_shared/types/color'
import type { Simplify } from '@/components/_shared/types/simplify'
import type { CommandItem as CommandItemPrimitive } from 'cmdk'

type CommandItemPrimitiveType = typeof CommandItemPrimitive

type CommandItemPrimtiveProps = Omit<
	React.ComponentPropsWithRef<CommandItemPrimitiveType>,
	'value' | 'color'
>

type CommandItemCustomProps = {
	value: string | number
	color?: Color
}

type CommandItemProps = Simplify<CommandItemPrimtiveProps & CommandItemCustomProps>

export type { CommandItemProps }
