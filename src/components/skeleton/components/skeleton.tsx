import { polymorphic } from '@renderui/utils'
import React from 'react'

import { SkeletonProps, SkeletonRef } from '@/components/skeleton/types/skeleton'
import { getMergedClassName } from '@/components/skeleton/utils/get-merged-class-name'

const Skeleton = React.forwardRef<SkeletonRef, SkeletonProps>((props, ref) => {
  const { asChild, className, count, variant = 'slide', type = 'static',  ...restProps } = props

  const mergedClassName = getMergedClassName(className, variant, type)

  const Component = polymorphic(asChild, 'div')

  return count ? (
    Array.from({ length: count }, (_, index) => (
      <Component key={index} ref={ref} className={mergedClassName} {...restProps} />
    ))
  ) : (
    <Component ref={ref} className={mergedClassName} {...restProps} />
  )
})

Skeleton.displayName = 'Skeleton'

export { Skeleton }
