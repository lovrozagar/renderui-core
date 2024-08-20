import { Simplify } from '@/components/_shared/types/simplify'

import { AsChildProp } from '@/components/_shared/types/as-child'

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

type ExclusiveUnion<T, U> = T | U extends Record<string, unknown>
	? (Without<T, U> & U) | (Without<U, T> & T)
	: T | U

type GridPrimitiveProps = React.ComponentPropsWithRef<'div'>

type GridCustomProps = {
	cols?: string | number
	autoFit?: number
	autoFill?: number
}

type GridAutoProps = ExclusiveUnion<{ autoFit?: number }, { autoFill?: number }>

type GridProps = Simplify<GridPrimitiveProps & GridCustomProps & GridAutoProps & AsChildProp>

export type { GridProps }
