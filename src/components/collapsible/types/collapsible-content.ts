import type { Simplify } from '@/components/_shared/types/simplify'
import type { CollapsibleContent as CollapsibleContentPrimitive } from '@radix-ui/react-collapsible'
import type { AnimationStyleVariables } from '@renderui/utils'

type CollapsibleContentPrimitiveType = typeof CollapsibleContentPrimitive

type CollapsibleContentPrimitiveProps = React.ComponentPropsWithRef<CollapsibleContentPrimitiveType>

type CollapsibleCustomProps = {
	hasDefaultAnimation?: boolean
	hasSkippedInitialAnimation?: boolean
} & AnimationStyleVariables

type CollapsibleContentProps = Simplify<CollapsibleContentPrimitiveProps & CollapsibleCustomProps>

export type { CollapsibleContentProps }
