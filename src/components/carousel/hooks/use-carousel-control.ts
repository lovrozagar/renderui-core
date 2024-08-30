'use client'

import { EMPTY_OBJECT } from '@/components/_shared/constants/constants'
import {
	DEFAULT_CAROUSEL_ALIGN,
	DEFAULT_CAROUSEL_DURATION,
	DEFAULT_CAROUSEL_LOOP,
} from '@/components/carousel/constants/constants'
import type { CarouselProps } from '@/components/carousel/types/carousel'
import { noop } from '@renderui/utils'
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react'
import React from 'react'

type UseCarouselControlArgs = Pick<CarouselProps, 'options'> & {
	orientation: 'horizontal' | 'vertical'
	plugins: CarouselProps['plugins'] | undefined
	setApi: CarouselProps['setApi'] | undefined
}

type KeyActionMap = {
	horizontal: {
		ArrowLeft: () => void
		ArrowRight: () => void
	}
	vertical: {
		ArrowUp: () => void
		ArrowDown: () => void
	}
}

function useCarouselControl(props: UseCarouselControlArgs) {
	const { orientation, options, plugins, setApi } = props

	const { duration, align, loop } = options ?? EMPTY_OBJECT

	const orientationToAxis = orientation === 'horizontal' ? 'x' : 'y'
	const [carouselRef, api] = useEmblaCarousel(
		{
			...options,
			duration: duration ?? DEFAULT_CAROUSEL_DURATION,
			align: align ?? DEFAULT_CAROUSEL_ALIGN,
			loop: loop ?? DEFAULT_CAROUSEL_LOOP,
			axis: orientationToAxis,
		},
		plugins,
	)

	const [canScrollPrevious, setCanScrollPrevious] = React.useState(false)
	const [canScrollNext, setCanScrollNext] = React.useState(false)

	const [index, setIndex] = React.useState(options?.startIndex ?? 0)
	const [realIndex, setRealIndex] = React.useState(options?.startIndex ? options.startIndex + 1 : 1)

	const slideCount = api?.scrollSnapList()?.length ?? 0

	const onSelect = React.useCallback((carouselApi: UseEmblaCarouselType[1]) => {
		if (!carouselApi) {
			return
		}

		setIndex(carouselApi.selectedScrollSnap())
		setRealIndex(carouselApi.selectedScrollSnap() + 1)
		setCanScrollPrevious(carouselApi.canScrollPrev())
		setCanScrollNext(carouselApi.canScrollNext())
	}, [])

	const scrollTo = React.useCallback(
		(index: number, shouldJump = false) => {
			api?.scrollTo(index, shouldJump)
		},
		[api],
	)

	const scrollPrevious = React.useCallback(() => {
		api?.scrollPrev()
	}, [api])

	const scrollNext = React.useCallback(() => {
		api?.scrollNext()
	}, [api])

	const handleKeyDown = React.useCallback(
		(event: React.KeyboardEvent<HTMLDivElement>) => {
			const keyActionMap: KeyActionMap = {
				horizontal: {
					ArrowLeft: scrollPrevious,
					ArrowRight: scrollNext,
				},
				vertical: {
					ArrowUp: scrollPrevious,
					ArrowDown: scrollNext,
				},
			}

			const action = keyActionMap[orientation]?.[
				event.key as keyof KeyActionMap[typeof orientation]
			] as (() => void) | undefined

			if (action) {
				event.preventDefault()
				action()
			}
		},
		[orientation, scrollNext, scrollPrevious],
	)

	React.useEffect(() => {
		if (!api || !setApi) {
			return
		}

		setApi(api)
	}, [api, setApi])

	React.useEffect(() => {
		if (!api) {
			return noop
		}

		onSelect(api)
		api.on('reInit', onSelect)
		api.on('select', onSelect)

		return () => api?.off('select', onSelect)
	}, [api, onSelect])

	return React.useMemo(
		() => ({
			selectedIndex: index,
			selectedRealIndex: realIndex,
			slideCount,
			canScrollPrevious,
			canScrollNext,
			scrollTo,
			scrollPrevious,
			scrollNext,
			handleKeyDown,
			carouselRef,
		}),
		[
			index,
			realIndex,
			slideCount,
			canScrollPrevious,
			canScrollNext,
			scrollTo,
			scrollPrevious,
			scrollNext,
			handleKeyDown,
			carouselRef,
		],
	)
}

export { useCarouselControl }
