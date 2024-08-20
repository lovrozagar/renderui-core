'use client'

import { cn } from '@renderui/utils'
import type React from 'react'

import { DEFAULT_COMMAND_CLASSNAME } from '@/components/command/constants/constants'
import type { CommandProps, CommandRef } from '@/components/command/types/command'
import { defaultFilter } from '@/components/command/utils/default-filter'

function useCommand(props: CommandProps, ref: React.ForwardedRef<CommandRef>) {
	const { className, onValueChange, filter, ...restProps } = props

	return {
		ref,
		className: cn(DEFAULT_COMMAND_CLASSNAME, className),
		onValueChange,
		filter: filter ?? defaultFilter,
		...restProps,
	}
}

export { useCommand }
