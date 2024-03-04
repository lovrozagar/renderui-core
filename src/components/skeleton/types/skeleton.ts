import { Simplify } from '@renderui/types'

import { AsChildProp } from '@/components/_shared/types/as-child'

type SkeletonRef = React.ElementRef<'div'>

type SkeletonPrimitiveProps = React.ComponentPropsWithoutRef<'div'>

type SkeletonRenderUIProps = {
  variant?: 'pulse' | 'slide'
  type?: 'static' | 'layer'
  count?: number
}

type SkeletonProps = Simplify<SkeletonPrimitiveProps & SkeletonRenderUIProps & AsChildProp>

export type { SkeletonProps, SkeletonRef }
