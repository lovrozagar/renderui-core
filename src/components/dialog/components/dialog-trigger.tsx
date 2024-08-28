'use client'

import { DialogTrigger as DialogTriggerPrimitive } from '@radix-ui/react-dialog'
import { cn } from '@renderui/utils'

import { Button } from '@/components/button/components/button'
import { DEFAULT_DIALOG_TRIGGER_CLASSNAME } from '@/components/dialog/constants/constants'
import type { DialogTriggerProps } from '@/components/dialog/types/dialog-trigger'

const DialogTrigger = (props: DialogTriggerProps) => {
	const { className, variant = 'solid', color = 'mode-accent', ...restProps } = props

	return (
		<DialogTriggerPrimitive asChild>
			<Button
				data-slot='trigger'
				color={color}
				variant={variant}
				className={cn(DEFAULT_DIALOG_TRIGGER_CLASSNAME, className)}
				{...restProps}
			/>
		</DialogTriggerPrimitive>
	)
}

export { DialogTrigger }
