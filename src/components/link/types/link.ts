import type { AsChildProp } from '@/components/_shared/types/as-child'
import type { Color } from '@/components/_shared/types/color'
import type { Simplify } from '@/components/_shared/types/simplify'
import type { NonNullableVariantProps } from '@/components/_shared/types/variant'
import type { linkClasses } from '@/components/link/classes/link-classes'

type LinkPrimitiveProps = Omit<React.ComponentPropsWithRef<'a'>, 'color'>

type LinkCustomProps = AsChildProp &
	NonNullableVariantProps<typeof linkClasses> & {
		color?: Color
	}

type LinkProps = Simplify<LinkPrimitiveProps & LinkCustomProps>

export type { LinkProps }
