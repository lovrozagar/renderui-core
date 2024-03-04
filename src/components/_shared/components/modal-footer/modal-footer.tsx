import { cx } from '@renderui/utils'
import React from 'react'

import { Flex, FlexProps, FlexRef } from '@/components/flex'

type ModalFooterRef = FlexRef

type ModalFooterProps = FlexProps

const ModalFooter = React.forwardRef<ModalFooterRef, ModalFooterProps>((props, ref) => {
  const { className, ...restProps } = props

  return (
    <Flex
      ref={ref}
      data-slot='footer'
      className={cx(
        'render-ui-modal-footer flex flex-col-reverse gap-2 pt-4 sm:flex-row sm:items-center sm:justify-end',
        className,
      )}
      {...restProps}
    />
  )
})

ModalFooter.displayName = 'ModalFooter'

export { ModalFooter }
