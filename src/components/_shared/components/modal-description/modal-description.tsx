import { cx } from '@renderui/utils'
import React from 'react'

import { Text, TextProps, TextRef } from '@/components/text'

const ModalDescription = React.forwardRef<TextRef, TextProps>((props, ref) => {
  const { className, size = 'sm', ...restProps } = props

  return (
    <Text
      ref={ref}
      data-slot='description'
      size={size}
      className={cx('render-ui-modal-description text-muted', className)}
      {...restProps}
    />
  )
})

ModalDescription.displayName = 'ModalDescription'

export { ModalDescription }
