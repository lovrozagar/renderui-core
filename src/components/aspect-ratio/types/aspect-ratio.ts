import { Simplify } from '@/components/_shared/types/simplify'
import React, { CSSProperties } from 'react'

import { AsChildProp } from '@/components/_shared/types/as-child'

type AspectRatioBoxProps = React.ComponentPropsWithRef<'div'>

type AspectRatioRatioProps = {
	ratio: CSSProperties['aspectRatio']
}

type AspectRatioProps = Simplify<AspectRatioBoxProps & AspectRatioRatioProps & AsChildProp>

export type { AspectRatioProps }
