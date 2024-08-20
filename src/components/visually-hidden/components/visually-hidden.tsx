import { cn } from '@renderui/utils'
import React from 'react'

import type { VisuallyHiddenProps } from '@/components/visually-hidden/types/visually-hidden'

const VisuallyHidden = (props: VisuallyHiddenProps) => {
	const { className, ...restProps } = props

	return <span className={cn('render-ui-visually-hidden sr-only', className)} {...restProps} />
}

export { VisuallyHidden }
