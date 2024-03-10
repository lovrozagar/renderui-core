import { CollapsibleContent as CollapsibleContentPrimitive } from '@radix-ui/react-collapsible'
import { Simplify } from '@renderui/types'

type CollapsibleContentPrimitiveType = typeof CollapsibleContentPrimitive

type CollapsibleContentRef = React.ElementRef<CollapsibleContentPrimitiveType>

type CollapsibleContentPrimitiveProps =
  React.ComponentPropsWithoutRef<CollapsibleContentPrimitiveType>

type CollapsibleCustomProps = {
  hasDefaultAnimation?: boolean
}

type CollapsibleContentProps = Simplify<CollapsibleContentPrimitiveProps & CollapsibleCustomProps>

export type { CollapsibleContentProps, CollapsibleContentRef }
