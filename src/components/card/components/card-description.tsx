import { cn } from '@renderui/utils'
import React from 'react'

import { DEFAULT_CARD_DESCRIPTION_CLASSNAME } from '@/components/card/constants/constants'
import { CardDescriptionProps, CardDescriptionRef } from '@/components/card/types/card-description'
import { Text } from '@/components/text'

const CardDescription = React.forwardRef<CardDescriptionRef, CardDescriptionProps>((props, ref) => {
  const { className, size = 'sm', ...restProps } = props

  return (
    <Text
      ref={ref}
      size={size}
      data-slot='description'
      className={cn(DEFAULT_CARD_DESCRIPTION_CLASSNAME, className)}
      {...restProps}
    />
  )
})

CardDescription.displayName = 'CardDescription'

export { CardDescription }
