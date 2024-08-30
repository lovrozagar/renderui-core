import type { Simplify } from '@/components/_shared/types/simplify'
import type { Dialog as SheetPrimitive } from '@radix-ui/react-dialog'

type SheetPrimitiveProps = React.ComponentProps<typeof SheetPrimitive>

type SheetCustomProps = {
	shouldForwardOutsideInteraction?: boolean
	onPointerDownOutside?: (event: PointerEvent) => void
}

type SheetProps = Simplify<SheetPrimitiveProps & SheetCustomProps>

export type { SheetProps }
