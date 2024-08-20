import { polymorphic } from '@renderui/utils'
import React from 'react'

import { BoxProps } from '@/components/box/types/box'
import { getMergedClassName } from '@/components/box/utils/get-merged-class-name'

const Box = (props: BoxProps) => {
	const { asChild, className, grow, noShrink, ...restProps } = props

	const Component = polymorphic(asChild, 'div')

	return <Component className={getMergedClassName(className, grow, noShrink)} {...restProps} />
}

export { Box }
