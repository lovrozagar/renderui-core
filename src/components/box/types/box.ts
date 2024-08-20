import type { Simplify } from '@/components/_shared/types/simplify'

import type { AsChildProp } from '@/components/_shared/types/as-child'

type BoxPrimitiveProps = React.ComponentPropsWithRef<'div'>

type BoxCustomProps = {
	grow?: boolean
	noShrink?: boolean
}

type BoxProps = Simplify<BoxPrimitiveProps & BoxCustomProps & AsChildProp>

export type { BoxProps }
