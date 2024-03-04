import { Simplify } from '@renderui/types'

import { AsChildProp } from '../../_shared/types/as-child'

type SeparatorRef = HTMLHRElement

type SeparatorHTMLProps = React.ComponentPropsWithoutRef<'hr'>

type SeparatorRenderUIProps = {
  orientation?: 'horizontal' | 'vertical'
}

type SeparatorProps = Simplify<SeparatorHTMLProps & SeparatorRenderUIProps & AsChildProp>

export type { SeparatorProps, SeparatorRef }
