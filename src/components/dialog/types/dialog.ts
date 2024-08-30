import type { Simplify } from '@/components/_shared/types/simplify'
import type { Dialog as DialogPrimitive } from '@radix-ui/react-dialog'
import type React from 'react'

type DialogPrimitiveProps = React.ComponentPropsWithRef<typeof DialogPrimitive>

type DialogCustomProps = {
	shouldForwardOutsideInteraction?: boolean
	onPointerDownOutside?: (event: PointerEvent) => void
}

type DialogProps = Simplify<DialogPrimitiveProps & DialogCustomProps>

export type { DialogProps }
