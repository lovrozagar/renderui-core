import type { Simplify } from '@/components/_shared/types/simplify'
import type React from 'react'

import type { AsChildProp } from '@/components/_shared/types/as-child'

type FlexPropsPrimitiveProps = React.ComponentPropsWithRef<'div'>

type FlexboxCustomProps = {
	growChildren?: boolean
	center?: boolean
}

type FlexProps = Simplify<FlexPropsPrimitiveProps & FlexboxCustomProps & AsChildProp>

export type { FlexProps }
