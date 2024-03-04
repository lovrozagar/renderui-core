import { Simplify } from '@renderui/types'
import React from 'react'

import { AsChildProp } from '@/components/_shared/types/as-child'

type ProgressRef = React.ElementRef<'div'>

type ProgressPrimitiveProps = React.ComponentPropsWithoutRef<'div'>

type ProgressRenderUIProps = {
  orientation?: 'horizontal' | 'vertical'
  variant?: 'path' | 'spot'
  spotCount?: number
  isIndeterminate?: boolean | undefined
  value?: number | undefined
  indicatorRef?: React.RefObject<React.ElementRef<'div'>>
  indicatorProps?: React.ComponentPropsWithoutRef<'div'> & AsChildProp
}

type ProgressProps = Simplify<ProgressPrimitiveProps & ProgressRenderUIProps & AsChildProp>

export type { ProgressProps, ProgressRef }
