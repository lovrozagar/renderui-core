'use client'

import { useCarouselContext } from '@/components/carousel/contexts/carousel-context'
import type { CarouselProgressProps } from '@/components/carousel/types/carousel-progress'
import { carouselProgressVariants } from '@/components/carousel/variants/carousel-progress-variants'
import { Progress } from '@/components/progress/components/progress'
import { cn, cx, getOptionalObject } from '@renderui/utils'

const CarouselProgress = (props: CarouselProgressProps) => {
	const {
		className,
		indicatorProps,
		hasRing = false,
		size = 'full',
		variant = 'spot',
		position = 'bottom',
		...restProps
	} = props

	const { className: indicatorClassName, ...restIndicatorProps } = getOptionalObject(indicatorProps)

	const { orientation, hasProgressOnHoverOnly, slideCount, selectedRealIndex } =
		useCarouselContext()

	const getVariantBasedValue = () => {
		if (variant === 'spot') return selectedRealIndex

		return (selectedRealIndex / slideCount) * 100
	}

	const getOrientation = () => {
		const isHorizontalOrientation =
			orientation === 'horizontal' || position === 'top' || position === 'bottom'

		if (isHorizontalOrientation) return 'horizontal'

		return 'vertical'
	}

	return (
		<Progress
			variant={variant}
			spotCount={slideCount}
			orientation={getOrientation()}
			value={getVariantBasedValue()}
			className={cn(
				carouselProgressVariants({
					orientation,
					hasProgressOnHoverOnly,
					variant,
					position,
					size,
					hasRing,
				}),
				className,
			)}
			indicatorProps={{
				className: cx('bg-mode-contrast', indicatorClassName),
				...restIndicatorProps,
			}}
			{...restProps}
		/>
	)
}

export { CarouselProgress }
