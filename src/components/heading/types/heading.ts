import type { Simplify } from '@/components/_shared/types/simplify'
import type React from 'react'

import type { AsChildProp } from '@/components/_shared/types/as-child'
import type { NonNullableVariantProps } from '@/components/_shared/types/variants'
import type { headingClasses } from '@/components/heading/classes/heading-classes'

type HeadingPrimitiveProps = React.ComponentPropsWithRef<'h1'>

type HeadingCustomProps = {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

type HeadingVariantProps = NonNullableVariantProps<typeof headingClasses>

type HeadingProps = Simplify<
	HeadingPrimitiveProps & HeadingCustomProps & HeadingVariantProps & AsChildProp
>

export type { HeadingProps }
