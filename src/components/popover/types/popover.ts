import type { Popover as PopoverPrimitive } from '@radix-ui/react-popover'

type PopoverProps = React.ComponentPropsWithRef<typeof PopoverPrimitive> & {
	onPointerDownOutside?: (event: PointerEvent) => void
	shouldForwardOutsideInteraction?: boolean
}

export type { PopoverProps }
