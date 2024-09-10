'use client'

import { Button } from '@/components/button/components/button'
import type { HoverCardTriggerProps } from '@/components/hover-card/types/hover-card-trigger'
import { HoverCardTrigger as HoverCardTriggerPrimitive } from '@radix-ui/react-hover-card'

const HoverCardTrigger = (props: HoverCardTriggerProps) => {
	const { variant = 'plain', ...restProps } = props

	return (
		<HoverCardTriggerPrimitive asChild>
			<Button variant={variant} {...restProps} />
		</HoverCardTriggerPrimitive>
	)
}

export { HoverCardTrigger }
