import type { AsChildProp } from '@/components/_shared/types/as-child'
import type { Simplify } from '@/components/_shared/types/simplify'
import type React from 'react'

type CarouselItemPrimitive = React.ComponentPropsWithRef<'li'>

type CarouselItemCustomProps = {
	childrenContainerProps?: React.ComponentPropsWithRef<'div'> & AsChildProp
}

type CarouselItemProps = Simplify<CarouselItemPrimitive & CarouselItemCustomProps>

export type { CarouselItemProps }
