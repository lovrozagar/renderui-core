import { cn, getOptionalObject, polymorphic } from '@renderui/utils'
import React from 'react'

import {
  DEFAULT_CARD_FOOTER_CHILDREN_CLASSNAME,
  DEFAULT_CARD_FOOTER_CLASSNAME,
} from '@/components/card/constants/constants'
import { CardFooterProps, CardFooterRef } from '@/components/card/types/card-footer'

const CardFooter = React.forwardRef<CardFooterRef, CardFooterProps>((props, ref) => {
  const {
    asChild,
    childrenContainerProps,
    contentClassName,
    childrenClassName,
    startContent,
    endContent,
    children,
    ...restProps
  } = props

  const {
    asChild: childrenContainerAsChild,
    className: childrenContainerClassName,
    ...restChildrenContainerProps
  } = getOptionalObject(childrenContainerProps)

  const ContentComponent = polymorphic(asChild, 'div')

  const ChildrenContainerComponent = polymorphic(childrenContainerAsChild, 'span')

  return (
    <ContentComponent
      ref={ref}
      data-slot='footer-content'
      className={cn(DEFAULT_CARD_FOOTER_CHILDREN_CLASSNAME, contentClassName)}
      {...restProps}
    >
      {startContent}
      <ChildrenContainerComponent
        data-slot='footer-children'
        className={cn(DEFAULT_CARD_FOOTER_CLASSNAME, childrenClassName, childrenContainerClassName)}
        {...restChildrenContainerProps}
      >
        {children}
      </ChildrenContainerComponent>
      {endContent}
    </ContentComponent>
  )
})

CardFooter.displayName = 'CardFooter'

export { CardFooter }
