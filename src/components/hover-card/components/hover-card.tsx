'use client'

import type { HoverCardProps } from '@/components/hover-card/types/hover-card'
import { HoverCard as HoverCardPrimitive } from '@radix-ui/react-hover-card'

const HoverCard = (props: HoverCardProps) => {
	const { openDelay = 0, closeDelay = 300, ...restProps } = props

	return <HoverCardPrimitive openDelay={openDelay} closeDelay={closeDelay} {...restProps} />
}

export { HoverCard }
