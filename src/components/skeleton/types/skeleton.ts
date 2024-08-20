import type { Simplify } from '@/components/_shared/types/simplify'

import type { AsChildProp } from '@/components/_shared/types/as-child'
import type { AnimationStyleVariables } from '@renderui/utils'

type SkeletonPrimitiveProps = React.ComponentPropsWithRef<'div'>

type SkeletonRenderCustomProps = {
	variant?: 'pulse' | 'slide'
	type?: 'static' | 'layer'
	count?: number
} & Pick<AnimationStyleVariables, 'animationDuration' | 'animationTimingFunction'>

type SkeletonProps = Simplify<SkeletonPrimitiveProps & SkeletonRenderCustomProps & AsChildProp>

export type { SkeletonProps }
