import type useEmblaCarousel from 'embla-carousel-react'
import type { UseEmblaCarouselType } from 'embla-carousel-react'

type EmblaCarouselProps = {
	options?: Parameters<typeof useEmblaCarousel>[0] | undefined
	plugins?: Parameters<typeof useEmblaCarousel>[1]
	orientation?: 'horizontal' | 'vertical'
	setApi?: (api: UseEmblaCarouselType[1]) => void
}

type CarouselContextProps = {
	selectedIndex: number
	selectedRealIndex: number
	slideCount: number
	canScrollPrevious: boolean
	canScrollNext: boolean
	hasControlsOnHoverOnly: boolean | undefined
	hasProgressOnHoverOnly: boolean | undefined
	handleKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void
	carouselRef: ReturnType<typeof useEmblaCarousel>[0]
	scrollTo: (index: number, shouldJump?: boolean) => void
	scrollPrevious: () => void
	scrollNext: () => void
} & EmblaCarouselProps

export type { CarouselContextProps, EmblaCarouselProps }
