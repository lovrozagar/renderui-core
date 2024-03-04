import { polymorphic } from '@renderui/utils'
import React from 'react'

import { BoxProps, BoxRef } from '@/components/box/types/box'
import { getMergedClassName } from '@/components/box/utils/get-merged-class-name'

const Box = React.forwardRef<BoxRef, BoxProps>((props, ref) => {
  const { asChild, className, grow, noShrink, ...restProps } = props

  const Component = polymorphic(asChild, 'div')

  return (
    <Component ref={ref} className={getMergedClassName(className, grow, noShrink)} {...restProps} />
  )
})

Box.displayName = 'Box'

export { Box }
