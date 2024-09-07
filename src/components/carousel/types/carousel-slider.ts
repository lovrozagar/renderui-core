import type { AsChildProp } from '@/components/_shared/types/as-child'
import type { Simplify } from '@/components/_shared/types/simplify'
import type { carouselSliderClasses } from '@/components/carousel/classes/carousel-slider-classes'
import type { VariantProps } from '@renderui/utils'
import type React from 'react'

type CarouselSliderPrimitiveProps = React.ComponentPropsWithRef<'ul'>

type CarouselSliderCustomProps = VariantProps<typeof carouselSliderClasses> & {
	containerProps?: React.ComponentPropsWithRef<'div'>
}

type CarouselSliderProps = Simplify<
	CarouselSliderPrimitiveProps & CarouselSliderCustomProps & AsChildProp
>

export type { CarouselSliderProps }
