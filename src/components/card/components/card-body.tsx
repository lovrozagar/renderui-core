import { cn, polymorphic } from '@renderui/utils'
import React from 'react'

import { DEFAULT_CARD_BODY_CLASSNAME } from '@/components/card/constants/constants'
import { CardBodyProps, CardBodyRef } from '@/components/card/types/card-body'

const CardBody = React.forwardRef<CardBodyRef, CardBodyProps>((props, ref) => {
  const { asChild, className, ...restProps } = props

  const Component = polymorphic(asChild, 'div')

  return (
    <Component
      ref={ref}
      data-slot='body'
      className={cn(DEFAULT_CARD_BODY_CLASSNAME, className)}
      {...restProps}
    />
  )
})

CardBody.displayName = 'CardBody'

export { CardBody }
