'use client'

import { Button } from '@/components/button/components/button'
import { useCarouselContext } from '@/components/carousel/contexts/carousel-context'
import type { CarouselNextProps } from '@/components/carousel/types/carousel-next'
import { carouselNextVariants } from '@/components/carousel/variants/carousel-next-variants'
import { cn } from '@renderui/utils'
import { chain } from 'react-aria'

const CarouselNext = (props: CarouselNextProps) => {
	const { children, className, onPress, variant = 'plain', size = 'icon', ...restProps } = props

	const { hasControlsOnHoverOnly, orientation, canScrollNext, scrollNext } = useCarouselContext()

	return (
		<Button
			size={size}
			variant={variant}
			isDisabled={!canScrollNext}
			className={cn(carouselNextVariants({ hasControlsOnHoverOnly, orientation }), className)}
			onPress={chain(onPress, scrollNext)}
			{...restProps}
		>
			{children}
		</Button>
	)
}

export { CarouselNext }
