'use client'

import {
	CAROUSEL_ACCESSIBILITY_PROPS,
	DEFAULT_CAROUSEL_CLASSNAME,
} from '@/components/carousel/constants/constants'
import { CarouselProvider } from '@/components/carousel/contexts/carousel-context'
import { useCarouselControl } from '@/components/carousel/hooks/use-carousel-control'
import type { CarouselProps } from '@/components/carousel/types/carousel'
import { cn, functionCallOrValue, polymorphic } from '@renderui/utils'

const Carousel = (props: CarouselProps) => {
	const {
		asChild,
		setApi,
		children,
		className,
		options,
		plugins,
		orientation = 'horizontal',
		hasControlsOnHoverOnly = false,
		hasProgressOnHoverOnly = false,
		...restProps
	} = props

	const axisToOrientation = options?.axis === 'y' ? 'vertical' : 'horizontal'
	const contextOrientation = orientation ?? axisToOrientation

	const {
		selectedIndex,
		selectedRealIndex,
		slideCount,
		canScrollPrevious,
		canScrollNext,
		carouselRef,
		scrollTo,
		scrollPrevious,
		scrollNext,
		handleKeyDown,
	} = useCarouselControl({
		options,
		plugins,
		orientation: contextOrientation,
		setApi,
	})

	const Component = polymorphic(asChild, 'section')

	return (
		<CarouselProvider
			value={{
				selectedIndex,
				selectedRealIndex,
				slideCount,
				options,
				canScrollNext,
				canScrollPrevious,
				orientation: contextOrientation,
				hasControlsOnHoverOnly,
				hasProgressOnHoverOnly,
				handleKeyDown,
				carouselRef,
				scrollTo,
				scrollNext,
				scrollPrevious,
			}}
		>
			<Component
				className={cn(DEFAULT_CAROUSEL_CLASSNAME, className)}
				{...CAROUSEL_ACCESSIBILITY_PROPS}
				{...restProps}
			>
				{functionCallOrValue(children, {
					orientation: contextOrientation,
					selectedIndex,
					selectedRealIndex,
					canScrollPrevious,
					canScrollNext,
					scrollTo,
					scrollPrevious,
					scrollNext,
				})}
			</Component>
		</CarouselProvider>
	)
}

export { Carousel }
