'use client'

import { AccordionContent as AccordionContentPrimitive } from '@radix-ui/react-accordion'
import { cn, getOptionalObject, polymorphic } from '@renderui/utils'
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
    const { className, children, childrenContainerProps, ...restProps } = props

    const {
      asChild,
      className: childrenContainerClassName,
      ...restChildrenContainerProps
    } = getOptionalObject(childrenContainerProps)

    const AccordionContentChildrenContainer = polymorphic(asChild, 'div')

    return (
      <AccordionContentPrimitive
        ref={ref}
        className={cn(DEFAULT_ACCORDION_CONTENT_CLASSNAME, className)}
        {...restProps}
      >
        <AccordionContentChildrenContainer
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
