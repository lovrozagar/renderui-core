'use client'

import { Drawer as DrawerPrimitive } from 'vaul'
import { Button } from '@/components/button'
import { cn } from '@renderui/utils/cn'
import React from 'react'
import { DrawerTriggerProps } from '@/components/drawer/types/drawer-trigger'

const DrawerTrigger = (props: DrawerTriggerProps) => {
	const { className, children, variant = 'solid', color = 'mode-accent', ...restProps } = props

	return (
		<DrawerPrimitive.Trigger asChild>
			<Button
				color={color}
				variant={variant}
				className={cn('render-ui-drawer-trigger', className)}
				{...restProps}
			>
				{children}
			</Button>
		</DrawerPrimitive.Trigger>
	)
}

export { DrawerTrigger }
