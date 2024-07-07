'use client'

import { CollapsibleContent as CollapsibleContentPrimitive } from '@radix-ui/react-collapsible'
import { cn } from '@renderui/utils'
import React, { useEffect, useState } from 'react'

import {
  CollapsibleContentProps,
  CollapsibleContentRef,
} from '@/components/collapsible/types/collapsible-content'
import {
  COLLAPSIBLE_ANIMATED_CONTENT_CLASSNAME,
  COLLAPSIBLE_CONTENT_DEFAULT_ANIMATION_DURATION,
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
      hasSkippedInitialAnimation,
      hasDefaultAnimation = true,
      ...restProps
    } = props

    const [defaultDuration, setDefaultDuration] = useState(
      hasSkippedInitialAnimation ? 0 : COLLAPSIBLE_CONTENT_DEFAULT_ANIMATION_DURATION,
    )

    useEffect(() => {
      setDefaultDuration(COLLAPSIBLE_CONTENT_DEFAULT_ANIMATION_DURATION)
    }, [hasSkippedInitialAnimation])

    return (
      <CollapsibleContentPrimitive
        ref={ref}
        data-slot='content'
        className={cn(
          DEFAULT_COLLAPSIBLE_CONTENT_CLASSNAME,
          hasDefaultAnimation ? COLLAPSIBLE_ANIMATED_CONTENT_CLASSNAME : undefined,
          className,
        )}
        style={{
          ...getAnimationStyleVariables({
            ...props,
            defaultAnimationDuration: defaultDuration,
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
