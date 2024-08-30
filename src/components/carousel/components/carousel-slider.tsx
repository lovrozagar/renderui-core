'use client'

import { useCarouselContext } from '@/components/carousel/contexts/carousel-context'
import type { CarouselSliderProps } from '@/components/carousel/types/carousel-slider'
import { carouselSliderVariants } from '@/components/carousel/variants/carousel-slider-variants'
import { cn, cx, getOptionalObject, polymorphic } from '@renderui/utils'

const CarouselSlider = (props: CarouselSliderProps) => {
	const { asChild, className, containerProps, slidesInView = '1', ...restProps } = props

	const { className: containerClassName, ...restContainerProps } = getOptionalObject(containerProps)

	const { carouselRef, orientation } = useCarouselContext()

	const Component = polymorphic(asChild, 'ul')

	return (
		<div
			ref={carouselRef}
			className={cx('overflow-hidden', containerClassName)}
			{...restContainerProps}
		>
			<Component
				className={cn(carouselSliderVariants({ orientation, slidesInView }), className)}
				{...restProps}
			/>
		</div>
	)
}

export { CarouselSlider }
