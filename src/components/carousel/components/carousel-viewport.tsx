'use client'

import { CAROUSEL_VIEWPORT_CLASSNAME } from '@/components/carousel/constants/constants'
import { useCarouselContext } from '@/components/carousel/contexts/carousel-context'
import type { CarouselViewportProps } from '@/components/carousel/types/carousel-viewport'
import { cn, polymorphic } from '@renderui/utils'
import { chain } from 'react-aria'

const CarouselViewport = (props: CarouselViewportProps) => {
	const { asChild, className, onKeyDownCapture, ...restProps } = props

	const { handleKeyDown } = useCarouselContext()

	const Component = polymorphic(asChild, 'div')

	return (
		<Component
			data-slot='viewport'
			tabIndex={0}
			className={cn(CAROUSEL_VIEWPORT_CLASSNAME, className)}
			onKeyDownCapture={chain(handleKeyDown, onKeyDownCapture)}
			{...restProps}
		/>
	)
}

export { CarouselViewport }
