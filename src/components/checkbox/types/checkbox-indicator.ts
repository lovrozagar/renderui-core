import { Simplify } from '@renderui/types'
import { m } from 'framer-motion'
import React from 'react'

type CheckboxIndicatorPrimitive = typeof m.svg

type CheckboxIndicatorRef = React.ElementRef<CheckboxIndicatorPrimitive>

// type CheckboxIndicatorPrimitiveProps = React.ComponentPropsWithoutRef<CheckboxIndicatorPrimitive>
type CheckboxIndicatorPrimitiveProps = any

type CheckboxIndicatorRenderUIProps = {
  isChecked?: boolean
  hasIconContentWhenUnchecked?: boolean
  pathProps?: React.ComponentPropsWithoutRef<typeof m.path>
}

type CheckboxIndicatorProps = Simplify<
  CheckboxIndicatorPrimitiveProps & CheckboxIndicatorRenderUIProps
>

export type { CheckboxIndicatorProps, CheckboxIndicatorRef }
