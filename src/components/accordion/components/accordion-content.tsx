'use client'

import { AccordionContent as AccordionContentPrimitive } from '@radix-ui/react-accordion'
import { cn } from '@renderui/utils/cn'
import { getOptionalObject } from '@renderui/utils/get-optional-object'
import { polymorphic } from '@renderui/utils/polymorphic'
import { getAnimationStyleVariables } from '@renderui/utils/get-animation-style-variables'
import React from 'react'

import {
  DEFAULT_ACCORDION_CONTENT_CHILDREN_CONTAINER_CLASSNAME,
  DEFAULT_ACCORDION_CONTENT_CLASSNAME,
} from '@/components/accordion/constants/constants'
import {
  AccordionContentProps,
  AccordionContentRef,
} from '@/components/accordion/types/accordion-content'

const AccordionContent = React.forwardRef<AccordionContentRef, AccordionContentProps>(
  (props, ref) => {
    const { className, style, children, childrenContainerProps, ...restProps } = props

    const {
      asChild,
      className: childrenContainerClassName,
      ...restChildrenContainerProps
    } = getOptionalObject(childrenContainerProps)

    const AccordionContentChildrenContainer = polymorphic(asChild, 'div')

    return (
      <AccordionContentPrimitive
        ref={ref}
        data-slot='content'
        className={cn(DEFAULT_ACCORDION_CONTENT_CLASSNAME, className)}
        style={{
          ...getAnimationStyleVariables({
            props,
            defaultAnimationDuration: 200,
            defaultAnimationTimingFunction: 'ease-out',
          }),
          ...style,
        }}
        {...restProps}
      >
        <AccordionContentChildrenContainer
          data-slot='content-children-container'
          className={cn(
            DEFAULT_ACCORDION_CONTENT_CHILDREN_CONTAINER_CLASSNAME,
            childrenContainerClassName,
          )}
          {...restChildrenContainerProps}
        >
          {children}
        </AccordionContentChildrenContainer>
      </AccordionContentPrimitive>
    )
  },
)

AccordionContent.displayName = 'AccordionContent'

export { AccordionContent }
