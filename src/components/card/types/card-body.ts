import { Simplify } from '@renderui/types'
import React from 'react'

import { AsChildProp } from '@/components/_shared/types/as-child'

type CardBodyRef = React.ElementRef<'div'>

type CardBodyProps = Simplify<React.ComponentPropsWithoutRef<'div'> & AsChildProp>

export type { CardBodyProps, CardBodyRef }
