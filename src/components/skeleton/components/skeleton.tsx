import { polymorphic } from '@renderui/utils'
import React from 'react'

import { SkeletonProps, SkeletonRef } from '@/components/skeleton/types/skeleton'
import { getMergedClassName } from '@/components/skeleton/utils/get-merged-class-name'
import { getAnimationStyleVariables } from '@/components/_shared/utils/get-animation-style-variables'

const Skeleton = React.forwardRef<SkeletonRef, SkeletonProps>((props, ref) => {
  const {
    asChild,
    className,
    style,
    count,
    variant = 'slide',
    type = 'static',
    ...restProps
  } = props

  const Component = polymorphic(asChild, 'div')

  const mergedClassName = getMergedClassName(className, variant, type)

  const mergedStyle = {
    ...style,
    ...getAnimationStyleVariables({
      ...props,
      defaultAnimationDuration: 1500,
      defaultAnimationTimingFunction: 'ease',
    }),
  }

  return count ? (
    Array.from({ length: count }, (_, index) => (
      <Component
        key={index}
        ref={ref}
        className={mergedClassName}
        style={mergedStyle}
        {...restProps}
      />
    ))
  ) : (
    <Component ref={ref} className={mergedClassName} style={mergedStyle} {...restProps} />
  )
})

Skeleton.displayName = 'Skeleton'

export { Skeleton }
