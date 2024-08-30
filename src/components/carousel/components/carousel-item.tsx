'use client'

import {
	CAROUSEL_ITEM_ACCESSIBILITY_PROPS,
	DEFAULT_CAROUSEL_ITEM_CHILDREN_CONTAINER_CLASSNAME,
} from '@/components/carousel/constants/constants'
import { useCarouselContext } from '@/components/carousel/contexts/carousel-context'
import type { CarouselItemProps } from '@/components/carousel/types/carousel-item'
import { carouselItemVariants } from '@/components/carousel/variants/carousel-item-variants'
import { cn, getOptionalObject, polymorphic } from '@renderui/utils'

const CarouselItem = (props: CarouselItemProps) => {
	const { className: itemClassName, children, childrenContainerProps, ...restProps } = props

	const { asChild, className: childrenContainerClassName } =
		getOptionalObject(childrenContainerProps)

	const { orientation } = useCarouselContext()

	const ItemChildrenContainerComponent = polymorphic(asChild, 'div')

	return (
		<li
			className={cn(carouselItemVariants({ orientation, isGallery: false }), itemClassName)}
			{...CAROUSEL_ITEM_ACCESSIBILITY_PROPS}
			{...restProps}
		>
			<ItemChildrenContainerComponent
				className={cn(
					DEFAULT_CAROUSEL_ITEM_CHILDREN_CONTAINER_CLASSNAME,
					childrenContainerClassName,
				)}
				{...childrenContainerProps}
			>
				{children}
			</ItemChildrenContainerComponent>
		</li>
	)
}

export { CarouselItem }
