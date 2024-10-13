'use client'

import { chain, cn } from '@renderui/utils'
import { CommandItem as CommandItemPrimitive } from 'cmdk'

import { DEFAULT_COMMAND_ITEM_CLASSNAME } from '@/components/command/constants/constants'
import { useCommandContext } from '@/components/command/contexts/command-context'
import type { CommandItemProps } from '@/components/command/types/command-item'
import type { CSSProperties } from 'react'

const CommandItem = (props: CommandItemProps) => {
	const { value, className, style, color, onSelect, ...restProps } = props

	const { color: rootColor, onSelect: rootOnSelect } = useCommandContext()

	return (
		<CommandItemPrimitive
			data-slot='item'
			value={value as string}
			className={cn(DEFAULT_COMMAND_ITEM_CLASSNAME, className)}
			style={
				{
					...style,
					'--item-color': `var(--${color ?? rootColor})`,
				} as CSSProperties
			}
			onSelect={chain(rootOnSelect, onSelect)}
			{...restProps}
		/>
	)
}

export { CommandItem }
