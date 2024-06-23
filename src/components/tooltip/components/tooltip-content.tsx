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
import { getAnimationStyleVariables } from '@/components/_shared/utils/get-animation-style-variables'

const TooltipContent = React.forwardRef<TooltipContentRef, TooltipContentProps>((props, ref) => {
  const {
    children,
    className,
    arrowProps,
    style,
    animationDuration,
    animationInDuration,
    animationOutDuration,
    side = 'top',
    hasArrow = true,
    avoidCollisions = true,
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
      style={{
        ...getAnimationStyleVariables({
          animationDuration,
          animationInDuration,
          animationOutDuration,
          defaultAnimationInDuration: 200,
          defaultAnimationOutDuration: 200,
        }),
        ...style,
      }}
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
