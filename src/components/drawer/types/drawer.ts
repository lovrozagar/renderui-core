import type { Simplify } from '@/components/_shared/types/simplify'
import type { Drawer as DrawerPrimitive } from 'vaul'

type DrawerPrimitiveProps = React.ComponentPropsWithRef<typeof DrawerPrimitive.Root>

type DrawerCustomProps = {
	defaultOpen?: boolean
	shouldForwardOutsideInteraction?: boolean
	onPointerDownOutside?: (event: PointerEvent) => void
}

type DrawerProps = Simplify<DrawerPrimitiveProps & DrawerCustomProps>

export type { DrawerProps }
