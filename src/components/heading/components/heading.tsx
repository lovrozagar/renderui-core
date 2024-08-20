import { cn, polymorphic } from '@renderui/utils'
import React from 'react'

import { headingClasses } from '@/components/heading/classes/heading-classes'
import type { HeadingProps } from '@/components/heading/types/heading'

const Heading = (props: HeadingProps) => {
	const {
		asChild,
		children,
		className,
		size,
		overflow,
		shadow,
		letterSpacing,
		textBreak,
		as = 'h3',
		...restProps
	} = props

	const Component = polymorphic(asChild, as)

	return (
		<Component
			className={cn(
				headingClasses({
					as,
					size,
					shadow,
					overflow,
					letterSpacing,
					textBreak,
				}),
				className,
			)}
			{...restProps}
		>
			{children}
		</Component>
	)
}

export { Heading }
