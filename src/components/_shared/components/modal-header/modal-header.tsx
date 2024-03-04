import { cx } from '@renderui/utils'
import React from 'react'

import { Grid, GridProps, GridRef } from '@/components/grid'

const ModalHeader = React.forwardRef<GridRef, GridProps>((props, ref) => {
  const { className, ...restProps } = props

  return (
    <Grid
      ref={ref}
      data-slot='header'
      className={cx('render-ui-modal-header gap-0.5 pb-4', className)}
      {...restProps}
    />
  )
})

ModalHeader.displayName = 'ModalHeader'

export { ModalHeader }
