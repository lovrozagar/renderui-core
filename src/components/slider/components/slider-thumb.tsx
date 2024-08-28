'use client'

import { SliderThumb as SliderThumbPrimitive } from '@radix-ui/react-slider'
import { cn } from '@renderui/utils'

import { DEFAULT_SLIDER_THUMB_CLASSNAME } from '@/components/slider/constants/constants'
import type { SliderThumbProps } from '@/components/slider/types/slider-thumb'

const SliderThumb = (props: SliderThumbProps) => {
	const { className, ...restProps } = props

	return (
		<SliderThumbPrimitive
			data-slot='thumb'
			className={cn(DEFAULT_SLIDER_THUMB_CLASSNAME, className)}
			{...restProps}
		/>
	)
}

export { SliderThumb }
