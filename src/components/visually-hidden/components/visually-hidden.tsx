import { cn } from '@renderui/utils'
import React from 'react'

import { VisuallyHiddenProps, VisuallyHiddenRef } from '@/components/visually-hidden/types/visually-hidden'

const VisuallyHidden = React.forwardRef<VisuallyHiddenRef, VisuallyHiddenProps>((props, ref) => {
  const { className, ...restProps } = props

  return (
    <span ref={ref} className={cn('render-ui-visually-hidden sr-only', className)} {...restProps} />
  )
})

VisuallyHidden.displayName = 'VisuallyHidden'

export { VisuallyHidden }
