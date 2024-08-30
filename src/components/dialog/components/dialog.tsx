'use client'

import { Dialog as DialogPrimitive } from '@radix-ui/react-dialog'

import type { DialogProps } from '@/components/dialog/types/dialog'
import React from 'react'
import { useContentOutsideClick } from '@/components/_shared/hooks/use-content-outside-click'
import { useControllableState } from '../../../../dist'
import { ContentRefProvider } from '@/components/_shared/contexts/content-ref-context'

const Dialog = (props: DialogProps) => {
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
		<DialogPrimitive open={open} onOpenChange={setOpen} {...restProps}>
			<ContentRefProvider value={{ contentRef }}>{children}</ContentRefProvider>
		</DialogPrimitive>
	)
}

export { Dialog }
