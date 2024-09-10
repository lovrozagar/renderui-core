'use client'

import { ContentRefProvider } from '@/components/_shared/contexts/content-ref-context'
import { useContentOutsideClick } from '@/components/_shared/hooks/use-content-outside-click'
import { useControllableState } from '@/components/_shared/hooks/use-controllable-state'
import type { PopoverProps } from '@/components/popover/types/popover'
import { Popover as PopoverPrimitive } from '@radix-ui/react-popover'
import React from 'react'

const Popover = (props: PopoverProps) => {
	const {
		defaultOpen,
		open: openProp,
		children,
		onOpenChange,
		onPointerDownOutside,
		shouldForwardOutsideInteraction = false,
		...restProps
	} = props

	const [open, setOpen] = useControllableState({
		defaultProp: defaultOpen,
		prop: openProp,
		onChange: onOpenChange,
	})

	const contentRef = React.useRef<HTMLDivElement | null>(null)

	useContentOutsideClick({
		enabled: open,
		contentRef,
		shouldForwardOutsideInteraction,
		setOpen: undefined,
		onPointerDownOutside,
	})

	return (
		<PopoverPrimitive open={open} onOpenChange={setOpen} {...restProps}>
			<ContentRefProvider value={{ contentRef }}>{children}</ContentRefProvider>
		</PopoverPrimitive>
	)
}

export { Popover }
