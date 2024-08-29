'use client'

import type { SkeletonProps } from '@/components/skeleton/types/skeleton'
import { getMergedClassName } from '@/components/skeleton/utils/get-merged-class-name'
import { getAnimationStyleVariables, polymorphic } from '@renderui/utils'

const Skeleton = (props: SkeletonProps) => {
	const {
		asChild,
		className,
		style,
		count,
		animationDuration,
		animationTimingFunction,
		variant = 'slide',
		type = 'static',
		...restProps
	} = props

	const Component = polymorphic(asChild, 'div')

	const mergedClassName = getMergedClassName(className, variant, type)

	const mergedStyle = {
		...style,
		...getAnimationStyleVariables({
			animationDuration,
			animationTimingFunction,
			defaultAnimationDuration: 1500,
			defaultAnimationTimingFunction: 'ease',
		}),
	}

	return count ? (
		Array.from({ length: count }, (_, index) => (
			<Component key={index} className={mergedClassName} style={mergedStyle} {...restProps} />
		))
	) : (
		<Component className={mergedClassName} style={mergedStyle} {...restProps} />
	)
}

export { Skeleton }
