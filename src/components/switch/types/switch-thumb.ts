import { Simplify } from '@renderui/types'
import React from 'react'

import { AsChildProp } from '@/components/_shared/types/as-child'

type SwitchThumbRef = React.ElementRef<'span'>

type SwitchThumbProps = Simplify<React.ComponentPropsWithoutRef<'span'> & AsChildProp>

export type { SwitchThumbProps, SwitchThumbRef }
