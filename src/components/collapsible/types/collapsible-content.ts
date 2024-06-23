import { AnimationStyleVariaiables } from '@/components/_shared/utils/get-animation-style-variables'
import { CollapsibleContent as CollapsibleContentPrimitive } from '@radix-ui/react-collapsible'
import { Simplify } from '@renderui/types'

type CollapsibleContentPrimitiveType = typeof CollapsibleContentPrimitive

type CollapsibleContentRef = React.ElementRef<CollapsibleContentPrimitiveType>

type CollapsibleContentPrimitiveProps =
  React.ComponentPropsWithoutRef<CollapsibleContentPrimitiveType>

type CollapsibleCustomProps = {
  hasDefaultAnimation?: boolean
} & AnimationStyleVariaiables

type CollapsibleContentProps = Simplify<CollapsibleContentPrimitiveProps & CollapsibleCustomProps>

export type { CollapsibleContentProps, CollapsibleContentRef }
