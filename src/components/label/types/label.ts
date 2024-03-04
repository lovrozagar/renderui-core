import { Simplify } from '@renderui/types'

import { AsChildProp } from '@/components/_shared/types/as-child'

type LabelRef = HTMLLabelElement

type LabelProps = Simplify<React.ComponentPropsWithoutRef<'label'> & AsChildProp>

export type { LabelProps, LabelRef }
