import type { DialogOverlay as OverlayPrimitive } from '@radix-ui/react-dialog'
import type { AnimationStyleVariables } from '@renderui/utils'

type OverlayPrimitiveType = typeof OverlayPrimitive

type OverlayProps = React.ComponentPropsWithRef<OverlayPrimitiveType> & AnimationStyleVariables

export type { OverlayProps }
