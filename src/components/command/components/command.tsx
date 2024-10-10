'use client'

import { cn } from '@renderui/utils'
import { Command as CommandPrimitive } from 'cmdk'
import React from 'react'

import { useControllableState } from '@/components/_shared/hooks/use-controllable-state'
import { DEFAULT_COMMAND_CLASSNAME } from '@/components/command/constants/constants'
import { CommandProvider } from '@/components/command/contexts/command-context'
import type { CommandProps } from '@/components/command/types/command'
import { defaultFilter } from '@/components/command/utils/default-filter'

const Command = (props: CommandProps) => {
	const {
		className,
		children,
		value: valueProp,
		defaultValue,
		onValueChange,
		filter,
		loop = true,
		type = 'combobox',
		color = 'primary',
		...restProps
	} = props

	const [value, setValue] = useControllableState({
		prop: valueProp,
		defaultProp: defaultValue,
		onChange: onValueChange,
	})

	const memoizedProviderValue = React.useMemo(
		() => ({ type, color, setValue }),
		[type, color, setValue],
	)

	return (
		<CommandPrimitive
			data-slot='base'
			loop={loop}
			value={value}
			className={cn(DEFAULT_COMMAND_CLASSNAME, className)}
			onValueChange={setValue}
			filter={filter ?? defaultFilter}
			{...restProps}
		>
			<CommandProvider value={memoizedProviderValue}>{children}</CommandProvider>
		</CommandPrimitive>
	)
}

Command.displayName = 'Command'

export { Command }
