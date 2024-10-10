import type { Simplify } from '@/components/_shared/types/simplify'
import type React from 'react'

import type { AsChildProp } from '@/components/_shared/types/as-child'
import type { NonNullableVariantProps } from '@/components/_shared/types/variant'
import type { textClasses } from '@/components/text/classes/text-classes'

type TextPrimitiveProps = React.ComponentPropsWithRef<'span'>

type TextCustomProps = {
	hasStartSpace?: boolean
	hasEndSpace?: boolean
}

type TextProps = Simplify<
	TextPrimitiveProps & TextCustomProps & NonNullableVariantProps<typeof textClasses> & AsChildProp
>

export type { TextProps }
