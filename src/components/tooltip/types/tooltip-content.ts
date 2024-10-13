import type { Color } from '@/components/_shared/types/color'
import type { Simplify } from '@/components/_shared/types/simplify'
import type {
	TooltipArrow as TooltipArrowPrimitive,
	TooltipContent as TooltipContentPrimitive,
} from '@radix-ui/react-tooltip'
import type { AnimationStyleVariables } from '@renderui/utils'
import type React from 'react'

type TooltipContentPrimitiveType = typeof TooltipContentPrimitive

type TooltipContentPrimitiveProps = Omit<
	React.ComponentPropsWithRef<TooltipContentPrimitiveType>,
	'color'
>

type TooltioContentCustomProps = {
	color?: Color
	hasArrow?: boolean
	arrowProps?: React.ComponentPropsWithRef<typeof TooltipArrowPrimitive>
} & AnimationStyleVariables

type TooltipContentProps = Simplify<TooltipContentPrimitiveProps & TooltioContentCustomProps>

export type { TooltipContentProps }
