import { cn, polymorphic } from '@renderui/utils'
import React from 'react'

import { DEFAULT_SUB_LAYER_CLASSNAME } from '@/components/sub-layer/constants/constants'
import { SubLayerProps, SubLayerRef } from '@/components/sub-layer/types/sub-layer'

const SubLayer = React.forwardRef<SubLayerRef, SubLayerProps>((props, ref) => {
  const { asChild, className, role = 'presentation', ...restProps } = props

  const Component = polymorphic(asChild, 'span')

  return (
    <Component
      ref={ref}
      role={role}
      aria-hidden
      data-slot='sub-layer'
      className={cn(DEFAULT_SUB_LAYER_CLASSNAME, className)}
      {...restProps}
    />
  )
})

SubLayer.displayName = 'SubLayer'

export { SubLayer }
