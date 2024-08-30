import { ContentRefProvider } from '@/components/_shared/contexts/content-ref-context'
import { useContentOutsideClick } from '@/components/_shared/hooks/use-content-outside-click'
import { useControllableState } from '@/components/_shared/hooks/use-controllable-state'
import type { DrawerProps } from '@/components/drawer/types/drawer'
import React from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'

const Drawer = (props: DrawerProps) => {
	const {
		defaultOpen,
		open: openProp,
		children,
		onOpenChange,
		onPointerDownOutside,
		shouldScaleBackground = true,
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
		<DrawerPrimitive.Root
			open={open}
			onOpenChange={setOpen}
			shouldScaleBackground={shouldScaleBackground}
			{...restProps}
		>
			<ContentRefProvider value={{ contentRef }}>{children}</ContentRefProvider>
		</DrawerPrimitive.Root>
	)
}

export { Drawer }
