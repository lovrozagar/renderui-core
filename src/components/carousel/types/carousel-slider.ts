import type { AsChildProp } from '@/components/_shared/types/as-child'
import type { Simplify } from '@/components/_shared/types/simplify'
import type { carouselSliderVariants } from '@/components/carousel/variants/carousel-slider-variants'
import type { VariantProps } from '@renderui/utils'
import type React from 'react'

type CarouselSliderPrimitiveProps = React.ComponentPropsWithRef<'ul'>

type CarouselSliderCustomProps = VariantProps<typeof carouselSliderVariants> & {
	containerProps?: React.ComponentPropsWithRef<'div'>
}

type CarouselSliderProps = Simplify<
	CarouselSliderPrimitiveProps & CarouselSliderCustomProps & AsChildProp
>

export type { CarouselSliderProps }
