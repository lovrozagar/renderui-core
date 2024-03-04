'use client'

import {
  TooltipArrow as TooltipArrowPrimitive,
  TooltipContent as TooltipContentPrimitive,
} from '@radix-ui/react-tooltip'
import { cn, getOptionalObject } from '@renderui/utils'
import React from 'react'

import {
  DEFAULT_SIDE_OFFSET,
  DEFAULT_TOOLTIP_ARROW_CLASSNAME,
  DEFAULT_TOOLTIP_CONTENT_CLASSNAME,
} from '@/components/tooltip/constants/constants'
import { TooltipContentProps, TooltipContentRef } from '@/components/tooltip/types/tooltip-content'

const TooltipContent = React.forwardRef<TooltipContentRef, TooltipContentProps>((props, ref) => {
  const {
    children,
    className,
    arrowProps,
    hasArrow = true,
    side = 'top',
    sideOffset = DEFAULT_SIDE_OFFSET,
    ...restProps
  } = props

  const { className: arrowClassName, ...restArrowProps } = getOptionalObject(arrowProps)

  return (
    <TooltipContentPrimitive
      ref={ref}
      data-slot='content'
      side={side}
      sideOffset={sideOffset}
      className={cn(DEFAULT_TOOLTIP_CONTENT_CLASSNAME, className)}
      {...restProps}
    >
      {children}
      {hasArrow ? (
        <TooltipArrowPrimitive
          className={cn(DEFAULT_TOOLTIP_ARROW_CLASSNAME, arrowClassName)}
          {...restArrowProps}
        />
      ) : null}
    </TooltipContentPrimitive>
  )
})

TooltipContent.displayName = 'TooltipContent'

export { TooltipContent }
