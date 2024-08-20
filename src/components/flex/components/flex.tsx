import { polymorphic } from '@renderui/utils'
import React from 'react'

import type { FlexProps } from '@/components/flex/types/flex'
import { getMergedClassName } from '@/components/flex/utils/get-merged-class-name'

const Flex = (props: FlexProps) => {
	const { asChild, children, growChildren, center, className, ...restProps } = props

	const Component = polymorphic(asChild, 'div')

	return (
		<Component className={getMergedClassName(growChildren, center, className)} {...restProps}>
			{children}
		</Component>
	)
}

export { Flex }
