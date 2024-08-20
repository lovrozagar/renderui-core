'use client'

import type { CollapsibleProps } from '@/components/collapsible/types/collapsible'
import { Collapsible as CollapsiblePrimitive } from '@radix-ui/react-collapsible'
import { cn } from '@renderui/utils'
import React from 'react'

const Collapsible = (props: CollapsibleProps) => {
	const { className, ...restProps } = props

	return (
		<CollapsiblePrimitive
			data-slot='base'
			className={cn('render-ui-collapsible', className)}
			{...restProps}
		/>
	)
}

export { Collapsible }
