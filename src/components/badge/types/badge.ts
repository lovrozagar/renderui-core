import type { AsChildProp } from '@/components/_shared/types/as-child'
import type { Color } from '@/components/_shared/types/color'
import type { Simplify } from '@/components/_shared/types/simplify'

type BadgePrimitiveProps = Omit<React.ComponentPropsWithRef<'div'>, 'color'>

type BadgeCustomProps = AsChildProp & {
	color?: Color
}

type BadgeProps = Simplify<BadgePrimitiveProps & BadgeCustomProps>

export type { BadgeProps }
