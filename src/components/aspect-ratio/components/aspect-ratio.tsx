import { polymorphic } from '@renderui/utils'
import React from 'react'

import { AspectRatioProps, AspectRatioRef } from '@/components/aspect-ratio/types/aspect-ratio'
import { getMergedStyles } from '@/components/aspect-ratio/utils/get-merged-styles'

const AspectRatio = React.forwardRef<AspectRatioRef, AspectRatioProps>((props, ref) => {
  const { asChild, ratio, className, style, ...restProps } = props

  const { mergedClassName, mergedStyle } = getMergedStyles(ratio, className, style)

  const Component = polymorphic(asChild, 'div')

  return <Component ref={ref} className={mergedClassName} style={mergedStyle} {...restProps} />
})

AspectRatio.displayName = 'AspectRatio'

export { AspectRatio }
