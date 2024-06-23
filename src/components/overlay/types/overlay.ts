import { AnimationStyleVariaiables } from '@/components/_shared/utils/get-animation-style-variables'
import { DialogOverlay as OverlayPrimitive } from '@radix-ui/react-dialog'

type OverlayPrimitiveType = typeof OverlayPrimitive

type OverlayRef = React.ElementRef<OverlayPrimitiveType>

type OverlayProps = React.ComponentPropsWithRef<OverlayPrimitiveType> & AnimationStyleVariaiables

export type { OverlayProps, OverlayRef }
