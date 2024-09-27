import type { AsChildProp } from '@/components/_shared/types/as-child'
import type { Simplify } from '@/components/_shared/types/simplify'

type BadgePrimitiveProps = React.ComponentPropsWithRef<'div'>

type BadgeCustomProps = AsChildProp

type BadgeProps = Simplify<BadgePrimitiveProps & BadgeCustomProps>

export type { BadgeProps }
