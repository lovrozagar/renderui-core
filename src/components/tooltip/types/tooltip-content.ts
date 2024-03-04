import {
  TooltipArrow as TooltipArrowPrimitive,
  TooltipContent as TooltipContentPrimitive,
} from '@radix-ui/react-tooltip'
import { Simplify } from '@renderui/types'
import React from 'react'

type TooltipContentPrimitiveType = typeof TooltipContentPrimitive

type TooltipContentRef = React.ElementRef<TooltipContentPrimitiveType>

type TooltipContentPrimitiveProps = React.ComponentPropsWithoutRef<TooltipContentPrimitiveType>

type TooltioContentRenderUIProps = {
  hasArrow?: boolean
  arrowProps?: React.ComponentPropsWithoutRef<typeof TooltipArrowPrimitive>
}

type TooltipContentProps = Simplify<TooltipContentPrimitiveProps & TooltioContentRenderUIProps>

export type { TooltipContentProps, TooltipContentRef }
