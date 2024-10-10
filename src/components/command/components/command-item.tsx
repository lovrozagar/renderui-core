'use client'

import { cn } from '@renderui/utils'
import { CommandItem as CommandItemPrimitive } from 'cmdk'

import { DEFAULT_COMMAND_ITEM_CLASSNAME } from '@/components/command/constants/constants'
import type { CommandItemProps } from '@/components/command/types/command-item'
import type { CSSProperties } from 'react'
import { useCommandContext } from '@/components/command/contexts/command-context'

const CommandItem = (props: CommandItemProps) => {
	const { value, className, style, color, ...restProps } = props

	const { color: rootColor } = useCommandContext()

	return (
		<CommandItemPrimitive
			data-slot='item'
			value={value as string}
			className={cn(DEFAULT_COMMAND_ITEM_CLASSNAME, className)}
			style={
				{
					...style,
					'--item-color': `var(--${color ?? rootColor ?? 'primary'})`,
				} as CSSProperties
			}
			{...restProps}
		/>
	)
}

export { CommandItem }
