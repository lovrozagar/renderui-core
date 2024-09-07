'use client'

import { carouselItemClasses } from '@/components/carousel/classes/carousel-item-classes'
import {
	CAROUSEL_ITEM_ACCESSIBILITY_PROPS,
	DEFAULT_CAROUSEL_ITEM_CHILDREN_CONTAINER_CLASSNAME,
} from '@/components/carousel/constants/constants'
import { useCarouselContext } from '@/components/carousel/contexts/carousel-context'
import type { CarouselItemProps } from '@/components/carousel/types/carousel-item'
import { cn, getOptionalObject, polymorphic } from '@renderui/utils'

const CarouselItem = (props: CarouselItemProps) => {
	const { className: itemClassName, children, childrenContainerProps, ...restProps } = props

	const {
		asChild,
		className: childrenContainerClassName,
		...restChildrenContainerProps
	} = getOptionalObject(childrenContainerProps)

	const { orientation } = useCarouselContext()

	const ItemChildrenContainerComponent = polymorphic(asChild, 'div')

	return (
		<li
			data-slot='item'
			className={cn(carouselItemClasses({ orientation, isGallery: false }), itemClassName)}
			{...CAROUSEL_ITEM_ACCESSIBILITY_PROPS}
			{...restProps}
		>
			<ItemChildrenContainerComponent
				data-slot='item-children-container'
				className={cn(
					DEFAULT_CAROUSEL_ITEM_CHILDREN_CONTAINER_CLASSNAME,
					childrenContainerClassName,
				)}
				{...restChildrenContainerProps}
			>
				{children}
			</ItemChildrenContainerComponent>
		</li>
	)
}

export { CarouselItem }
