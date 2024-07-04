import { Simplify } from '@/components/_shared/types/simplify'
import { m } from 'framer-motion'
import React from 'react'

type CheckboxIndicatorPrimitive = typeof m.svg

type CheckboxIndicatorRef = React.ElementRef<CheckboxIndicatorPrimitive>

// @TODO
// type CheckboxIndicatorPrimitiveProps = React.ComponentPropsWithoutRef<CheckboxIndicatorPrimitive>
type CheckboxIndicatorPrimitiveProps = Record<string, any>

type CheckboxIndicatorCustomProps = {
  isChecked?: boolean
  animationDuration?: number
  hasIconContentWhenUnchecked?: boolean
  pathProps?: React.ComponentPropsWithoutRef<typeof m.path>
}

type CheckboxIndicatorProps = Simplify<
  CheckboxIndicatorPrimitiveProps & CheckboxIndicatorCustomProps
>

export type { CheckboxIndicatorProps, CheckboxIndicatorRef }
