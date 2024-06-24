'use client'

import { CollapsibleContent as CollapsibleContentPrimitive } from '@radix-ui/react-collapsible'
import { cn } from '@renderui/utils'
import React from 'react'

import {
  CollapsibleContentProps,
  CollapsibleContentRef,
} from '@/components/collapsible/types/collapsible-content'
import {
  COLLAPSIBLE_ANIMATED_CONTENT_CLASSNAME,
  DEFAULT_COLLAPSIBLE_CONTENT_CLASSNAME,
} from '../constants/constants'
import { getAnimationStyleVariables } from '@/components/_shared/utils/get-animation-style-variables'

const CollapsibleContent = React.forwardRef<CollapsibleContentRef, CollapsibleContentProps>(
  (props, ref) => {
    const {
      style,
      className,
      animationInDuration,
      animationOutDuration,
      animationDuration,
      hasDefaultAnimation = true,
      ...restProps
    } = props

    return (
      <CollapsibleContentPrimitive
        ref={ref}
        data-slot='content'
        className={cn(
          DEFAULT_COLLAPSIBLE_CONTENT_CLASSNAME,
          hasDefaultAnimation ? COLLAPSIBLE_ANIMATED_CONTENT_CLASSNAME : '',
          className,
        )}
        style={{
          ...getAnimationStyleVariables({
            ...props,
            defaultAnimationDuration: 200,
            defaultAnimationTimingFunction: 'ease-out',
          }),
          ...style,
        }}
        {...restProps}
      />
    )
  },
)

CollapsibleContent.displayName = 'CollapsibleContent'

export { CollapsibleContent }
