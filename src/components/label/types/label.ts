import type { Simplify } from '@/components/_shared/types/simplify'

import type { AsChildProp } from '@/components/_shared/types/as-child'

type LabelProps = Simplify<React.ComponentPropsWithRef<'label'> & AsChildProp>

export type { LabelProps }
