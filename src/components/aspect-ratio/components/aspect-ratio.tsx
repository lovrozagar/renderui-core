'use client'

import type { AspectRatioProps } from '@/components/aspect-ratio/types/aspect-ratio'
import { getMergedStyles } from '@/components/aspect-ratio/utils/get-merged-styles'
import { polymorphic } from '@renderui/utils'

const AspectRatio = (props: AspectRatioProps) => {
	const { asChild, ratio, className, style, ...restProps } = props

	const { mergedClassName, mergedStyle } = getMergedStyles(ratio, className, style)

	const Component = polymorphic(asChild, 'div')

	return <Component className={mergedClassName} style={mergedStyle} {...restProps} />
}

export { AspectRatio }
