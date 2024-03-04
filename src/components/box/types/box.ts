import { Simplify } from '@renderui/types'

import { AsChildProp } from '@/components/_shared/types/as-child'

type BoxRef = HTMLDivElement

type BoxPrimitiveProps = React.ComponentPropsWithoutRef<'div'>

type BoxCustomProps = {
  grow?: boolean
  noShrink?: boolean
}

type BoxProps = Simplify<BoxPrimitiveProps & BoxCustomProps & AsChildProp>

export type { BoxProps, BoxRef }
