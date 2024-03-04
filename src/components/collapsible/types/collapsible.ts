import { Collapsible as CollapsiblePrimitive } from '@radix-ui/react-collapsible'

type CollapsiblePrimitiveType = typeof CollapsiblePrimitive

type CollapsibleRef = React.ElementRef<CollapsiblePrimitiveType>

type CollapsibleProps = React.ComponentPropsWithoutRef<CollapsiblePrimitiveType>

export type { CollapsibleProps, CollapsibleRef }
