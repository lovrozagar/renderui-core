import { Simplify } from '@/components/_shared/types/simplify'

import { AsChildProp } from '@/components/_shared/types/as-child'

type LabelRef = HTMLLabelElement

type LabelProps = Simplify<React.ComponentPropsWithoutRef<'label'> & AsChildProp>

export type { LabelProps, LabelRef }
