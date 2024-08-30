import type { Simplify } from '@/components/_shared/types/simplify'

import type { AsChildProp } from '../../_shared/types/as-child'

type SeparatorHTMLProps = React.ComponentPropsWithRef<'hr'>

type SeparatorCustomProps = {
	orientation?: 'horizontal' | 'vertical'
}

type SeparatorProps = Simplify<SeparatorHTMLProps & SeparatorCustomProps & AsChildProp>

export type { SeparatorProps }
