'use client'

import {
	Slider as SliderPrimitive,
	SliderRange as SliderRangePrimitive,
	SliderTrack as SliderTrackPrimitive,
} from '@radix-ui/react-slider'
import { cn, getOptionalObject } from '@renderui/utils'

import { SliderThumb } from '@/components/slider/components/slider-thumb'
import {
	DEFAULT_SLIDER_CLASSNAME,
	DEFAULT_SLIDER_RANGE_CLASSNAME,
	DEFAULT_SLIDER_TRACK_CLASSNAME,
	HORIZONTAL_SLIDER_CLASSNAME,
	HORIZONTAL_SLIDER_TRACK_CLASSNAME,
	SLIDER_HORIZONTAL_RANGE_CLASSNAME,
	SLIDER_VERTICAL_RANGE_CLASSNAME,
	VERTICAL_SLIDER_CLASSNAME,
	VERTICAL_SLIDER_TRACK_CLASSNAME,
} from '@/components/slider/constants/constants'
import type { SliderProps } from '@/components/slider/types/slider'

const Slider = (props: SliderProps) => {
	const {
		className,
		trackProps,
		rangeProps,
		thumbProps,
		children,
		isDisabled,
		orientation = 'horizontal',
		...restProps
	} = props

	const { className: trackClassName, ...restTrackProps } = getOptionalObject(trackProps)
	const { className: rangeClassName, ...restRangeProps } = getOptionalObject(rangeProps)

	return (
		<SliderPrimitive
			data-slot='base'
			disabled={isDisabled}
			orientation={orientation}
			className={cn(
				DEFAULT_SLIDER_CLASSNAME,
				orientation === 'horizontal' ? HORIZONTAL_SLIDER_CLASSNAME : VERTICAL_SLIDER_CLASSNAME,
				className,
			)}
			{...restProps}
		>
			<SliderTrackPrimitive
				data-slot='track'
				className={cn(
					DEFAULT_SLIDER_TRACK_CLASSNAME,
					orientation === 'horizontal'
						? HORIZONTAL_SLIDER_TRACK_CLASSNAME
						: VERTICAL_SLIDER_TRACK_CLASSNAME,
					trackClassName,
				)}
				{...restTrackProps}
			>
				<SliderRangePrimitive
					data-slot='range'
					className={cn(
						DEFAULT_SLIDER_RANGE_CLASSNAME,
						orientation === 'horizontal'
							? SLIDER_HORIZONTAL_RANGE_CLASSNAME
							: SLIDER_VERTICAL_RANGE_CLASSNAME,
						rangeClassName,
					)}
					{...restRangeProps}
				/>
			</SliderTrackPrimitive>
			{children || <SliderThumb {...thumbProps} />}
		</SliderPrimitive>
	)
}

export { Slider }
