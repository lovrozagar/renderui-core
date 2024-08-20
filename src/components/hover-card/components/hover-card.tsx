import type { HoverCardProps } from '@/components/hover-card/types/hover-card'
import { HoverCard as HoverCardPrimitive } from '@radix-ui/react-hover-card'
import React from 'react'

// @TODO add controllable state and and manipulation for open close on trigger

const HoverCard = (props: HoverCardProps) => {
	const { openDelay = 300, closeDelay = 300, ...restProps } = props

	return <HoverCardPrimitive openDelay={openDelay} closeDelay={closeDelay} {...restProps} />
}

export { HoverCard }
