'use client'

import { carouselSliderClasses } from '@/components/carousel/classes/carousel-slider-classes'
import { useCarouselContext } from '@/components/carousel/contexts/carousel-context'
import type { CarouselSliderProps } from '@/components/carousel/types/carousel-slider'
import { cn, cx, getOptionalObject, polymorphic } from '@renderui/utils'

const CarouselSlider = (props: CarouselSliderProps) => {
	const { asChild, className, containerProps, slidesInView = '1', ...restProps } = props

	const { className: containerClassName, ...restContainerProps } = getOptionalObject(containerProps)

	const { carouselRef, orientation } = useCarouselContext()

	const Component = polymorphic(asChild, 'ul')

	return (
		<div
			data-slot='slider-container'
			ref={carouselRef}
			className={cx('overflow-hidden', containerClassName)}
			{...restContainerProps}
		>
			<Component
				data-slot='slider-slider'
				className={cn(carouselSliderClasses({ orientation, slidesInView }), className)}
				{...restProps}
			/>
		</div>
	)
}

export { CarouselSlider }
