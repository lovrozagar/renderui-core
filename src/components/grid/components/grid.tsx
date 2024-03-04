import { polymorphic } from '@renderui/utils'
import React from 'react'

import { GridProps, GridRef } from '@/components/grid/types/grid'
import { getMergedStyles } from '@/components/grid/utils/get-merged-styles'

const Grid = React.forwardRef<GridRef, GridProps>((props, ref) => {
  const { asChild, className, style, cols, autoFit, autoFill, ...restProps } = props

  const { mergedClassName, mergedStyle } = getMergedStyles(className, style, cols, autoFit, autoFill)

  const Component = polymorphic(asChild, 'div')

  return <Component ref={ref} className={mergedClassName} style={mergedStyle} {...restProps} />
})

Grid.displayName = 'Grid'

export { Grid }
