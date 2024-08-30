import type { Simplify } from '@/components/_shared/types/simplify'
import type React from 'react'

import type { AsChildProp } from '@/components/_shared/types/as-child'

type ProgressPrimitiveProps = React.ComponentPropsWithRef<'div'>

type ProgressCustomProps = {
	orientation?: 'horizontal' | 'vertical'
	variant?: 'path' | 'spot'
	spotCount?: number
	isIndeterminate?: boolean | undefined
	value?: number | undefined
	indicatorRef?: React.RefObject<React.ElementRef<'div'>>
	indicatorProps?: React.ComponentPropsWithRef<'div'> & AsChildProp
}

type ProgressProps = Simplify<ProgressPrimitiveProps & ProgressCustomProps & AsChildProp>

export type { ProgressProps }
