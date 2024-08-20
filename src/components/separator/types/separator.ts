import { Simplify } from '@/components/_shared/types/simplify'

import { AsChildProp } from '../../_shared/types/as-child'

type SeparatorHTMLProps = React.ComponentPropsWithRef<'hr'>

type SeparatorRenderUIProps = {
	orientation?: 'horizontal' | 'vertical'
}

type SeparatorProps = Simplify<SeparatorHTMLProps & SeparatorRenderUIProps & AsChildProp>

export type { SeparatorProps }
