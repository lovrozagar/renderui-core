import { Simplify } from '@/components/_shared/types/simplify'
import React from 'react'

import { AsChildProp } from '@/components/_shared/types/as-child'
import { NonNullableVariantProps } from '@/components/_shared/types/variants'
import { textClasses } from '@/components/text/classes/text-classes'

type TextRef = React.ElementRef<'span' | 'div' | 'p'>

type TextPrimitiveProps = React.ComponentPropsWithoutRef<'span'>

type TextRenderUIProps = {
  hasStartSpace?: boolean
  hasEndSpace?: boolean
}

type TextProps = Simplify<
  TextPrimitiveProps & TextRenderUIProps & NonNullableVariantProps<typeof textClasses> & AsChildProp
>

export type { TextProps, TextRef }
