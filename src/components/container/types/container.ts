import type { Simplify } from '@/components/_shared/types/simplify'
import type React from 'react'

import type { AsChildProp } from '../../_shared/types/as-child'

type ContainerPrimitiveProps = React.ComponentPropsWithRef<'div'>

type ContainerCustomProps = {
	isFullHeight?: boolean
}

type ContainerProps = Simplify<ContainerPrimitiveProps & ContainerCustomProps & AsChildProp>

export type { ContainerProps }
