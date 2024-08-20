import type { Simplify } from '@/components/_shared/types/simplify'
import type React from 'react'
import type { CSSProperties } from 'react'

import type { AsChildProp } from '@/components/_shared/types/as-child'

type AspectRatioBoxProps = React.ComponentPropsWithRef<'div'>

type AspectRatioRatioProps = {
	ratio: CSSProperties['aspectRatio']
}

type AspectRatioProps = Simplify<AspectRatioBoxProps & AspectRatioRatioProps & AsChildProp>

export type { AspectRatioProps }
