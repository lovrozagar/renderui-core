import { Simplify } from '@/components/_shared/types/simplify'
import React, { CSSProperties } from 'react'

import { AsChildProp } from '@/components/_shared/types/as-child'

type AspectRatioRef = React.ElementRef<'div'>

type AspectRatioBoxProps = React.ComponentPropsWithoutRef<'div'>

type AspectRatioRatioProps = {
  ratio: CSSProperties['aspectRatio']
}

type AspectRatioProps = Simplify<AspectRatioBoxProps & AspectRatioRatioProps & AsChildProp>

export type { AspectRatioProps, AspectRatioRef }
