import { polymorphic } from '@renderui/utils'
import React from 'react'

import type { GridProps } from '@/components/grid/types/grid'
import { getMergedStyles } from '@/components/grid/utils/get-merged-styles'

const Grid = (props: GridProps) => {
	const { asChild, className, style, cols, autoFit, autoFill, ...restProps } = props

	const { mergedClassName, mergedStyle } = getMergedStyles(
		className,
		style,
		cols,
		autoFit,
		autoFill,
	)

	const Component = polymorphic(asChild, 'div')

	return <Component className={mergedClassName} style={mergedStyle} {...restProps} />
}

export { Grid }
