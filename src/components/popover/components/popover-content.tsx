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
  DEFAULT_POPOVER_ARROW_CONTAINER_CLASSNAME,
  DEFAULT_POPOVER_CONTENT_CLASSNAME,
  POPOVER_CONTENT_TRIGGER_HEIGHT_CLASSNAME,
  POPOVER_CONTENT_TRIGGER_MAX_HEIGHT_CLASSNAME,
  POPOVER_CONTENT_TRIGGER_MAX_WIDTH_CLASSNAME,
  POPOVER_CONTENT_TRIGGER_MIN_HEIGHT_CLASSNAME,
  POPOVER_CONTENT_TRIGGER_MIN_WIDTH_CLASSNAME,
  POPOVER_CONTENT_TRIGGER_WIDTH_CLASSNAME,
} from '@/components/popover/constants/constants'
import { usePopoverContext } from '@/components/popover/contexts/popover-context'
import { PopoverContentProps, PopoverContentRef } from '@/components/popover/types/popover-content'
import { getAnimationStyleVariables } from '@renderui/utils/get-animation-style-variables'
import { useMergedRef } from '@/components/_shared/hooks/use-merged-ref'

const PopoverContent = React.forwardRef<PopoverContentRef, PopoverContentProps>((props, ref) => {
  const {
    children,
    style,
    className,
    portalContainer,
    forceMount,
    hasTriggerHeight,
    hasTriggerWidth,
    hasTriggerMinWidth,
    hasTriggerMinHeight,
    hasTriggerMaxWidth,
    hasTriggerMaxHeight,
    arrowProps,
    animationDuration,
    animationInDuration,
    animationOutDuration,
    animationTimingFunction,
    animationInTimingFunction,
    animationOutTimingFunction,
    hasArrow = true,
    align = 'center',
    sideOffset = 4,
    ...restProps
  } = props

  const { className: arrowClassName, ...restArrowProps } = getOptionalObject(arrowProps)

  const { contentRef } = usePopoverContext()

  const mergedRefCallback = useMergedRef([contentRef, ref])

  return (
    <PopoverPortalPrimitive container={portalContainer} forceMount={forceMount}>
      <PopoverContentPrimitive
        ref={mergedRefCallback}
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
        style={{
          ...getAnimationStyleVariables({
            animationDuration,
            animationInDuration,
            animationOutDuration,
            animationTimingFunction,
            animationInTimingFunction,
            animationOutTimingFunction,
            defaultAnimationDuration: 150,
            defaultAnimationTimingFunction: 'ease',
          }),
          ...style,
        }}
        {...restProps}
      >
        {children}
        {hasArrow ? (
          <PopoverArrowPrimitive asChild>
            <span data-slot='arrow-container' className={DEFAULT_POPOVER_ARROW_CONTAINER_CLASSNAME}>
              <svg
                data-slot='arrow'
                className={DEFAULT_POPOVER_ARROW_CLASSNAME}
                width='10'
                height='5'
                viewBox='0 0 30 10'
                preserveAspectRatio='none'
                {...restArrowProps}
              >
                <polygon points='0,0 30,0 15,10'></polygon>
              </svg>
            </span>
          </PopoverArrowPrimitive>
        ) : null}
      </PopoverContentPrimitive>
    </PopoverPortalPrimitive>
  )
})

PopoverContent.displayName = 'PopoverContent'

export { PopoverContent }
