import { Simplify } from '@renderui/types'
import React from 'react'

import { AsChildProp } from '../../_shared/types/as-child'

type ContainerRef = React.ElementRef<'div'>

type ContainerPrimitiveProps = React.ComponentPropsWithoutRef<'div'>

type ContainerRenderUIProps = {
  isFullHeight?: boolean
}

type ContainerProps = Simplify<ContainerPrimitiveProps & ContainerRenderUIProps & AsChildProp>

export type { ContainerProps, ContainerRef }
