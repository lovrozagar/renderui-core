'use client'

import { cn } from '@renderui/utils'
import { CommandGroup as CommandGroupPrimitive } from 'cmdk'
import React from 'react'

import { DEFAULT_COMMAND_GROUP_CLASSNAME } from '@/components/command/constants/constants'
import type { CommandGroupProps } from '@/components/command/types/command-group'

const CommandGroup = (props: CommandGroupProps) => {
	const { className, ...restProps } = props

	return (
		<CommandGroupPrimitive
			data-slot='group'
			className={cn(DEFAULT_COMMAND_GROUP_CLASSNAME, className)}
			{...restProps}
		/>
	)
}

export { CommandGroup }
