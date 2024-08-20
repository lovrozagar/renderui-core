'use client'

import { useControllableState } from '@/components/_shared/hooks/use-controllable-state'
import { useEventListener } from '@/components/_shared/hooks/use-event-listener'
import { PopoverProvider } from '@/components/popover/contexts/popover-context'
import type { PopoverProps } from '@/components/popover/types/popover'
import { Popover as PopoverPrimitive } from '@radix-ui/react-popover'
import React from 'react'

const Popover = (props: PopoverProps) => {
	const {
		defaultOpen,
		open: openProp,
		children,
		shouldForwardOutsideInteraction,
		onOpenChange,
		onPointerDownOutside,
		...restProps
	} = props

	const [open, setOpen] = useControllableState({
		defaultProp: defaultOpen,
		prop: openProp,
		onChange: onOpenChange,
	})

	const contentRef = React.useRef<HTMLDivElement | null>(null)

	useEventListener({
		event: 'pointerdown',
		enabled: open,
		handler: (event) => {
			if (!(event.target instanceof Node)) {
				return
			}

			if (!onPointerDownOutside || contentRef.current?.contains(event.target)) {
				return
			}

			onPointerDownOutside(event)

			if (shouldForwardOutsideInteraction && event.target instanceof HTMLElement) {
				event.target.click()
			}
		},
	})

	return (
		<PopoverPrimitive open={open} onOpenChange={setOpen} {...restProps}>
			<PopoverProvider value={{ contentRef }}>{children}</PopoverProvider>
		</PopoverPrimitive>
	)
}

export { Popover }
