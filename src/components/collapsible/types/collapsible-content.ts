import { AnimationStyleVariables } from '@/components/_shared/utils/get-animation-style-variables'
import { CollapsibleContent as CollapsibleContentPrimitive } from '@radix-ui/react-collapsible'
import { Simplify } from '@/components/_shared/types/simplify'

type CollapsibleContentPrimitiveType = typeof CollapsibleContentPrimitive

type CollapsibleContentRef = React.ElementRef<CollapsibleContentPrimitiveType>

type CollapsibleContentPrimitiveProps =
  React.ComponentPropsWithoutRef<CollapsibleContentPrimitiveType>

type CollapsibleCustomProps = {
  hasDefaultAnimation?: boolean
  hasSkippedInitialAnimation?: boolean
} & AnimationStyleVariables

type CollapsibleContentProps = Simplify<CollapsibleContentPrimitiveProps & CollapsibleCustomProps>

export type { CollapsibleContentProps, CollapsibleContentRef }
