import type { Simplify } from '@/components/_shared/types/simplify'
import type React from 'react'

import type { AsChildProp } from '@/components/_shared/types/as-child'

type CardBodyProps = Simplify<React.ComponentPropsWithRef<'div'> & AsChildProp>

export type { CardBodyProps, CardBodyRef }
