import { Simplify } from '@/components/_shared/types/simplify'
import {
  TooltipArrow as TooltipArrowPrimitive,
  TooltipContent as TooltipContentPrimitive,
} from '@radix-ui/react-tooltip'
import { AnimationStyleVariables } from '@renderui/utils/get-animation-style-variables'
import React from 'react'

type TooltipContentPrimitiveType = typeof TooltipContentPrimitive

type TooltipContentRef = React.ElementRef<TooltipContentPrimitiveType>

type TooltipContentPrimitiveProps = React.ComponentPropsWithoutRef<TooltipContentPrimitiveType>

type TooltioContentRenderUIProps = {
  hasArrow?: boolean
  arrowProps?: React.ComponentPropsWithoutRef<typeof TooltipArrowPrimitive>
} & AnimationStyleVariables

type TooltipContentProps = Simplify<TooltipContentPrimitiveProps & TooltioContentRenderUIProps>

export type { TooltipContentProps, TooltipContentRef }
