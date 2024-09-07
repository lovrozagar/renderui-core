'use client'

import { Button } from '@/components/button/components/button'
import { carouselNextClasses } from '@/components/carousel/classes/carousel-next-classes'
import { useCarouselContext } from '@/components/carousel/contexts/carousel-context'
import type { CarouselNextProps } from '@/components/carousel/types/carousel-next'
import { cn } from '@renderui/utils'
import { chain } from 'react-aria'

const CarouselNext = (props: CarouselNextProps) => {
	const { children, className, onPress, variant = 'plain', size = 'icon', ...restProps } = props

	const { hasControlsOnHoverOnly, orientation, canScrollNext, scrollNext } = useCarouselContext()

	return (
		<Button
			data-slot='progress'
			size={size}
			variant={variant}
			isDisabled={!canScrollNext}
			className={cn(carouselNextClasses({ hasControlsOnHoverOnly, orientation }), className)}
			onPress={chain(onPress, scrollNext)}
			{...restProps}
		>
			{children}
		</Button>
	)
}

export { CarouselNext }
