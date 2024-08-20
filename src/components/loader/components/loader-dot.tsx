import { cn } from '@renderui/utils'
import React from 'react'

import {
	DEFAULT_LOADER_DOT_CLASSNAME,
	LOADER_DOT_PAUSED_CLASSNAME,
} from '@/components/loader/constants/constants'
import { LoaderDotProps } from '@/components/loader/types/loader-dot'

const LoaderDot = (props: LoaderDotProps) => {
	const { isPaused, className, style, element } = props

	const getMergedStyle = () => {
		if (element === 'middle') {
			return {
				animationDelay: '200ms',
				...style,
			}
		}

		if (element === 'end') {
			return {
				animationDelay: '400ms',
				...style,
			}
		}

		return style
	}

	return (
		<span
			data-slot='dot'
			className={cn(
				DEFAULT_LOADER_DOT_CLASSNAME,
				isPaused ? LOADER_DOT_PAUSED_CLASSNAME : '',
				className,
			)}
			style={getMergedStyle()}
		/>
	)
}

export { LoaderDot }
