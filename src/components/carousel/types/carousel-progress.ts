import type { Simplify } from '@/components/_shared/types/simplify'
import type { carouselProgressVariants } from '@/components/carousel/variants/carousel-progress-variants'
import type { ProgressProps } from '@/components/progress/types/progress'
import type { VariantProps } from '@renderui/utils'

type CarouselProgressCustomProps = VariantProps<typeof carouselProgressVariants>

type CarouselProgressProps = Simplify<ProgressProps & CarouselProgressCustomProps>

export type { CarouselProgressProps }
