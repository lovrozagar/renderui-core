import { CollapsibleContent as CollapsibleContentPrimitive } from '@radix-ui/react-collapsible'

type CollapsibleContentPrimitiveType = typeof CollapsibleContentPrimitive

type CollapsibleContentRef = React.ElementRef<CollapsibleContentPrimitiveType>

type CollapsibleContentProps = React.ComponentPropsWithoutRef<CollapsibleContentPrimitiveType>

export type { CollapsibleContentProps, CollapsibleContentRef }
