'use client'

import { Button } from '@/components/button/components/button'
import { carouselPreviousClasses } from '@/components/carousel/classes/carousel-previous-classes'
import { useCarouselContext } from '@/components/carousel/contexts/carousel-context'
import type { CarouselPreviousProps } from '@/components/carousel/types/carousel-previous'
import { cn } from '@renderui/utils'
import { chain } from 'react-aria'

const CarouselPrevious = (props: CarouselPreviousProps) => {
	const { children, className, onPress, variant = 'plain', size = 'icon', ...restProps } = props

	const { hasControlsOnHoverOnly, orientation, canScrollPrevious, scrollPrevious } =
		useCarouselContext()

	return (
		<Button
			data-slot='previous'
			size={size}
			variant={variant}
			isDisabled={!canScrollPrevious}
			className={cn(carouselPreviousClasses({ hasControlsOnHoverOnly, orientation }), className)}
			onPress={chain(onPress, scrollPrevious)}
			{...restProps}
		>
			{children}
		</Button>
	)
}

export { CarouselPrevious }
