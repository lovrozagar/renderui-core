import { cx } from '@renderui/utils'
import React from 'react'

import { DEFAULT_CARD_TITLE_CLASSNAME } from '@/components/card/constants/constants'
import { CardTitleProps, CardTitleRef } from '@/components/card/types/card-title'
import { Text } from '@/components/text'

const CardTitle = React.forwardRef<CardTitleRef, CardTitleProps>((props, ref) => {
  const { className, size = 'md', ...restProps } = props

  return (
    <Text
      ref={ref}
      size={size}
      data-slot='title'
      className={cx(DEFAULT_CARD_TITLE_CLASSNAME, className)}
      {...restProps}
    />
  )
})

CardTitle.displayName = 'CardTitle'

export { CardTitle }
