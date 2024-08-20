import type { Simplify } from '@/components/_shared/types/simplify'
import type { m } from 'framer-motion'
import type React from 'react'

/* biome-ignore lint/suspicious/noExplicitAny: avoid external module reference error */
type CheckboxIndicatorPrimitiveProps = Record<string, any>

type CheckboxIndicatorCustomProps = {
	isChecked?: boolean
	animationDuration?: number
	hasIconContentWhenUnchecked?: boolean
	pathProps?: React.ComponentPropsWithRef<typeof m.path>
}

type CheckboxIndicatorProps = Simplify<
	CheckboxIndicatorPrimitiveProps & CheckboxIndicatorCustomProps
>

export type { CheckboxIndicatorProps }
