import { Simplify } from '@/components/_shared/types/simplify'
import React from 'react'

import { AsChildProp } from '@/components/_shared/types/as-child'

type SwitchThumbProps = Simplify<React.ComponentPropsWithRef<'span'> & AsChildProp>

export type { SwitchThumbProps }
