import { DialogOverlay as OverlayPrimitive } from '@radix-ui/react-dialog'
import { AnimationStyleVariables } from '@renderui/utils/get-animation-style-variables'

type OverlayPrimitiveType = typeof OverlayPrimitive

type OverlayProps = React.ComponentPropsWithRef<OverlayPrimitiveType> & AnimationStyleVariables

export type { OverlayProps }
