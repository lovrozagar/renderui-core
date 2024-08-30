import type { AsChildProp } from '@/components/_shared/types/as-child'
import type { Simplify } from '@/components/_shared/types/simplify'
import type React from 'react'

type CarouselViewportPrimitiveProps = React.ComponentPropsWithRef<'div'>

type CarouselViewportProps = Simplify<CarouselViewportPrimitiveProps & AsChildProp>

export type { CarouselViewportProps }
