import { cx } from '@renderui/utils'
import React from 'react'

import { Text, TextProps, TextRef } from '@/components/text'

type ModalTitleRef = TextRef

type ModalTitleProps = TextProps

const ModalTitle = React.forwardRef<ModalTitleRef, ModalTitleProps>((props, ref) => {
  const { className, size = 'lg', color = 'mode-contrast', ...restProps } = props

  return (
    <Text
      ref={ref}
      data-slot='title'
      size={size}
      color={color}
      className={cx('render-ui-modal-title font-semibold', className)}
      {...restProps}
    />
  )
})

ModalTitle.displayName = 'ModalTitle'

export { ModalTitle }
