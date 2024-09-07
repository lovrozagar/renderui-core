import type { Simplify } from '@/components/_shared/types/simplify'
import type { carouselProgressClasses } from '@/components/carousel/classes/carousel-progress-classes'
import type { ProgressProps } from '@/components/progress/types/progress'
import type { VariantProps } from '@renderui/utils'

type CarouselProgressCustomProps = VariantProps<typeof carouselProgressClasses>

type CarouselProgressProps = Simplify<ProgressProps & CarouselProgressCustomProps>

export type { CarouselProgressProps }
