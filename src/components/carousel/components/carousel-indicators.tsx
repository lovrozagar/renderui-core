'use client'

import { EMPTY_OBJECT } from '@/components/_shared/constants/constants'
import { Button } from '@/components/button/components/button'
import { useCarouselContext } from '@/components/carousel/contexts/carousel-context'
import type { CarouselIndicatorsProps } from '@/components/carousel/types/carousel-indicators'
import { carouselIndicatorContainerVariants } from '@/components/carousel/variants/carousel-indicator-container-variants'
import { carouselIndicatorVariants } from '@/components/carousel/variants/carousel-indicator-variants'
import { chain, cn, polymorphic } from '@renderui/utils'

const CarouselIndicators = (props: CarouselIndicatorsProps) => {
	const {
		asChild,
		indicatorProps,
		className,
		onActivePress,
		position = 'bottom',
		...restProps
	} = props

	const {
		onPress,
		className: indicatorClassName,
		size = 'auto',
		variant = 'unstyled',
		...restIndicatorProps
	} = indicatorProps ?? EMPTY_OBJECT

	const { scrollTo, slideCount, selectedIndex } = useCarouselContext()

	const Component = polymorphic(asChild, 'div')

	return (
		<Component
			className={cn(carouselIndicatorContainerVariants({ position }), className)}
			{...restProps}
		>
			{Array.from({ length: slideCount }, (_, index) => {
				const isActiveIndex = selectedIndex === index

				return (
					<Button
						key={index}
						size={size}
						variant={variant}
						data-active={isActiveIndex ? 'true' : 'false'}
						className={cn(carouselIndicatorVariants({ isActiveIndex }), indicatorClassName)}
						onPress={chain(onPress, isActiveIndex ? onActivePress : undefined, () =>
							scrollTo(index),
						)}
						{...restIndicatorProps}
					/>
				)
			})}
		</Component>
	)
}

export { CarouselIndicators }
