import { Simplify } from '@renderui/types'

import { AsChildProp } from '@/components/_shared/types/as-child'
import { AnimationStyleVariables } from '@/components/_shared/utils/get-animation-style-variables'

type SkeletonRef = React.ElementRef<'div'>

type SkeletonPrimitiveProps = React.ComponentPropsWithoutRef<'div'>

type SkeletonRenderCustomProps = {
  variant?: 'pulse' | 'slide'
  type?: 'static' | 'layer'
  count?: number
} & Pick<AnimationStyleVariables, 'animationDuration' | 'animationTimingFunction'>

type SkeletonProps = Simplify<SkeletonPrimitiveProps & SkeletonRenderCustomProps & AsChildProp>

export type { SkeletonProps, SkeletonRef }
