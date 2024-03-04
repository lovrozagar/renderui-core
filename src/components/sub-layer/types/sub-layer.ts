import { Simplify } from '@renderui/types'
import React from 'react'

import { AsChildProp } from '@/components/_shared/types/as-child'

type SubLayerRef = React.ElementRef<'span'>

type SubLayerProps = Simplify<React.ComponentPropsWithoutRef<'span'> & AsChildProp>

export type { SubLayerProps, SubLayerRef }
