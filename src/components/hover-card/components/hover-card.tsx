'use client'

import { useControllableState } from '@/components/_shared/hooks/use-controllable-state'
import { HoverCardProvider } from '@/components/hover-card/contexts/hover-card-context'
import type { HoverCardProps } from '@/components/hover-card/types/hover-card'
import { HoverCard as HoverCardPrimitive } from '@radix-ui/react-hover-card'

const HoverCard = (props: HoverCardProps) => {
	const {
		defaultOpen,
		open: openProp,
		onOpenChange,
		children,
		shouldTriggerToggleOpen = false,
		openDelay = 0,
		closeDelay = 300,
	} = props

	const [open, setOpen] = useControllableState({
		defaultProp: defaultOpen,
		prop: openProp,
		onChange: onOpenChange,
	})

	return (
		<HoverCardPrimitive
			open={open}
			onOpenChange={setOpen}
			openDelay={openDelay}
			closeDelay={closeDelay}
		>
			<HoverCardProvider value={{ shouldTriggerToggleOpen, setOpen }}>{children}</HoverCardProvider>
		</HoverCardPrimitive>
	)
}

export { HoverCard }
