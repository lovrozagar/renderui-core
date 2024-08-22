'use client'

import { Button } from '@/components/button'
import type { DrawerTriggerProps } from '@/components/drawer/types/drawer-trigger'
import { cn } from '@renderui/utils'
import { Drawer as DrawerPrimitive } from 'vaul'

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
