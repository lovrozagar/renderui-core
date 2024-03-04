import { Simplify } from '@renderui/types'
import React from 'react'

import { AsChildProp } from '@/components/_shared/types/as-child'

type FlexRef = React.ElementRef<'div'>

type FlexPropsPrimitiveProps = React.ComponentPropsWithoutRef<'div'>

type FlexboxCustomProps = {
  growChildren?: boolean
  center?: boolean
}

type FlexProps = Simplify<FlexPropsPrimitiveProps & FlexboxCustomProps & AsChildProp>

export type { FlexProps, FlexRef }
