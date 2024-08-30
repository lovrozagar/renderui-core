import type { AsChildProp } from '@/components/_shared/types/as-child'
import type { Simplify } from '@/components/_shared/types/simplify'
import type { EmblaCarouselProps } from '@/components/carousel/types/carousel-api'
import type React from 'react'
import type { ReactNode } from 'react'

type CarouselPrimitiveProps = Omit<React.ComponentPropsWithRef<'section'>, 'children'>

type CarouselChildrenRenderProps = {
	orientation: EmblaCarouselProps['orientation']
	selectedIndex: number
	selectedRealIndex: number
	canScrollPrevious: boolean
	canScrollNext: boolean
	scrollTo: (index: number, shouldJump?: boolean) => void
	scrollPrevious: () => void
	scrollNext: () => void
}

type CarouselCustomProps = EmblaCarouselProps & {
	hasProgressOnHoverOnly?: boolean
	hasControlsOnHoverOnly?: boolean
	children: ReactNode | ((props: CarouselChildrenRenderProps) => ReactNode)
}

type CarouselProps = Simplify<CarouselPrimitiveProps & CarouselCustomProps & AsChildProp>

export type { CarouselProps }
