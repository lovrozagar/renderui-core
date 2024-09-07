import type { AsChildProp } from '@/components/_shared/types/as-child'
import type { Simplify } from '@/components/_shared/types/simplify'
import type { ButtonProps } from '@/components/button/types/button'
import type { carouselIndicatorContainerClasses } from '@/components/carousel/classes/carousel-indicator-container-classes'
import type { VariantProps } from '@renderui/utils'
import type React from 'react'

type CarouselIndicatorsPrimitiveProps = React.ComponentPropsWithRef<'div'>

type CarouselIndicatorsCustomProps = {
	indicatorProps?: ButtonProps
	onActivePress?: () => void
} & VariantProps<typeof carouselIndicatorContainerClasses>

type CarouselIndicatorsProps = Simplify<
	AsChildProp & CarouselIndicatorsPrimitiveProps & CarouselIndicatorsCustomProps
>

export type { CarouselIndicatorsProps }
