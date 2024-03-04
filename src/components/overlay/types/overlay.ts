import { DialogOverlay as OverlayPrimitive } from '@radix-ui/react-dialog'

type OverlayPrimitiveType = typeof OverlayPrimitive

type OverlayRef = React.ElementRef<OverlayPrimitiveType>

type OverlayProps = React.ComponentPropsWithRef<OverlayPrimitiveType>

export type { OverlayProps, OverlayRef }
