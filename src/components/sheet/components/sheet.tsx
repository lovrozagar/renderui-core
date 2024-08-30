'use client'

import { Dialog as SheetPrimitive } from '@radix-ui/react-dialog'

import type { SheetProps } from '@/components/sheet/types/sheet'
import { useControllableState } from '@/components/_shared/hooks/use-controllable-state'
import { ContentRefProvider } from '@/components/_shared/contexts/content-ref-context'
import React from 'react'
import { useContentOutsideClick } from '@/components/_shared/hooks/use-content-outside-click'

const Sheet = (props: SheetProps) => {
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
		setOpen,
		onPointerDownOutside,
	})

	return (
		<SheetPrimitive open={open} onOpenChange={setOpen} {...restProps}>
			<ContentRefProvider value={{ contentRef }}> {children}</ContentRefProvider>
		</SheetPrimitive>
	)
}

export { Sheet }
