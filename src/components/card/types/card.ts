import type { Simplify } from '@/components/_shared/types/simplify'
import type React from 'react'

import type { AsChildProp } from '@/components/_shared/types/as-child'
import type { NonNullableVariantProps } from '@/components/_shared/types/variants'
import type { cardClasses } from '@/components/card/classes/card-classes'

type CardPrimitiveProps = React.ComponentPropsWithRef<'div'>

type CardVariantProps = NonNullableVariantProps<typeof cardClasses>

type CardProps = Simplify<CardPrimitiveProps & CardVariantProps & AsChildProp>

export type { CardProps }
