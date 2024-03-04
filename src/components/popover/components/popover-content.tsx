'use client'

import {
  PopoverArrow as PopoverArrowPrimitive,
  PopoverContent as PopoverContentPrimitive,
  PopoverPortal as PopoverPortalPrimitive,
} from '@radix-ui/react-popover'
import { cn, getOptionalObject } from '@renderui/utils'
import React from 'react'

import {
  DEFAULT_POPOVER_ARROW_CLASSNAME,
  DEFAULT_POPOVER_CONTENT_CLASSNAME,
  POPOVER_CONTENT_TRIGGER_HEIGHT_CLASSNAME,
  POPOVER_CONTENT_TRIGGER_MAX_HEIGHT_CLASSNAME,
  POPOVER_CONTENT_TRIGGER_MAX_WIDTH_CLASSNAME,
  POPOVER_CONTENT_TRIGGER_MIN_HEIGHT_CLASSNAME,
  POPOVER_CONTENT_TRIGGER_MIN_WIDTH_CLASSNAME,
  POPOVER_CONTENT_TRIGGER_WIDTH_CLASSNAME,
} from '@/components/popover/constants/constants'
import { PopoverContentProps, PopoverContentRef } from '@/components/popover/types/popover-content'

const PopoverContent = React.forwardRef<PopoverContentRef, PopoverContentProps>((props, ref) => {
  const {
    className,
    children,
    portalContainer,
    forceMount,
    hasTriggerHeight,
    hasTriggerWidth,
    hasTriggerMinWidth,
    hasTriggerMinHeight,
    hasTriggerMaxWidth,
    hasTriggerMaxHeight,
    arrowProps,
    hasArrow = true,
    align = 'center',
    sideOffset = 4,
    ...restProps
  } = props

  const { className: arrowClassName, ...restArrowProps } = getOptionalObject(arrowProps)

  return (
    <PopoverPortalPrimitive container={portalContainer} forceMount={forceMount}>
      <PopoverContentPrimitive
        ref={ref}
        data-slot='content'
        align={align}
        forceMount={forceMount}
        sideOffset={sideOffset}
        className={cn(
          DEFAULT_POPOVER_CONTENT_CLASSNAME,
          hasTriggerHeight ? POPOVER_CONTENT_TRIGGER_HEIGHT_CLASSNAME : undefined,
          hasTriggerWidth ? POPOVER_CONTENT_TRIGGER_WIDTH_CLASSNAME : undefined,
          hasTriggerMinHeight ? POPOVER_CONTENT_TRIGGER_MIN_HEIGHT_CLASSNAME : undefined,
          hasTriggerMinWidth ? POPOVER_CONTENT_TRIGGER_MIN_WIDTH_CLASSNAME : undefined,
          hasTriggerMaxHeight ? POPOVER_CONTENT_TRIGGER_MAX_HEIGHT_CLASSNAME : undefined,
          hasTriggerMaxWidth ? POPOVER_CONTENT_TRIGGER_MAX_WIDTH_CLASSNAME : undefined,
          className,
        )}
        {...restProps}
      >
        {children}
        {hasArrow ? (
          <PopoverArrowPrimitive
            className={cn(DEFAULT_POPOVER_ARROW_CLASSNAME, arrowClassName)}
            {...restArrowProps}
          />
        ) : null}
      </PopoverContentPrimitive>
    </PopoverPortalPrimitive>
  )
})

PopoverContent.displayName = 'PopoverContent'

export { PopoverContent }
