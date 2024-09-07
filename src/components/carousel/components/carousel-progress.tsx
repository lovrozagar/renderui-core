'use client'

import { carouselProgressClasses } from '@/components/carousel/classes/carousel-progress-classes'
import { useCarouselContext } from '@/components/carousel/contexts/carousel-context'
import type { CarouselProgressProps } from '@/components/carousel/types/carousel-progress'
import { Progress } from '@/components/progress/components/progress'
import type { ProgressProps } from '@/components/progress/types/progress'
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
			data-slot='progress'
			variant={variant}
			spotCount={slideCount}
			orientation={getOrientation()}
			value={getVariantBasedValue()}
			className={cn(
				carouselProgressClasses({
					orientation,
					hasProgressOnHoverOnly,
					variant,
					position,
					size,
					hasRing,
				}),
				className,
			)}
			indicatorProps={
				{
					'data-slot': 'progress-indicator',
					className: cx('bg-mode-contrast', indicatorClassName),
					...restIndicatorProps,
				} as ProgressProps['indicatorProps']
			}
			{...restProps}
		/>
	)
}

export { CarouselProgress }
