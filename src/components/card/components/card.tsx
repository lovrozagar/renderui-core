import { cn, polymorphic } from '@renderui/utils'
import React from 'react'

import { cardClasses } from '@/components/card/classes/card-classes'
import { CardProps, CardRef } from '@/components/card/types/card'

const Card = React.forwardRef<CardRef, CardProps>((props, ref) => {
  const { asChild, className, isBlurred, isPressable, hasShadowOnHover, ...restProps } = props

  const variantClassName = cardClasses({ isBlurred, isPressable, hasShadowOnHover })

  const Component = polymorphic(asChild, 'div')

  return (
    <Component
      ref={ref}
      data-slot='base'
      className={cn(variantClassName, className)}
      {...restProps}
    />
  )
})

Card.displayName = 'Card'

export { Card }
