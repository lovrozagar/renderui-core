'use client'

import { CollapsibleTrigger as CollapsibleTriggerPrimitive } from '@radix-ui/react-collapsible'
import { cx } from '@renderui/utils'
import React from 'react'

import { Button } from '@/components/button'
import type { CollapsibleTriggerProps } from '@/components/collapsible/types/collapsible-trigger'

const CollapsibleTrigger = (props: CollapsibleTriggerProps) => {
	const { className, variant = 'solid', color = 'mode-accent' } = props

	return (
		<CollapsibleTriggerPrimitive asChild>
			<Button
				data-slot='trigger'
				variant={variant}
				color={color}
				className={cx('render-ui-collapsible-trigger', className)}
				{...props}
			/>
		</CollapsibleTriggerPrimitive>
	)
}

export { CollapsibleTrigger }
