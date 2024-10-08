import type { Simplify } from '@/components/_shared/types/simplify'
import type React from 'react'

import type { AsChildProp } from '@/components/_shared/types/as-child'

type CardHeaderPrimitiveProps = Omit<React.ComponentPropsWithRef<'div'>, 'className'>

type CardHeaderCustomProps = {
	startContent?: React.ReactNode
	endContent?: React.ReactNode
	childrenClassName?: string
	contentClassName?: string
	childrenContainerProps?: Simplify<React.ComponentPropsWithRef<'span'> & AsChildProp>
}

type CardHeaderProps = Simplify<CardHeaderPrimitiveProps & CardHeaderCustomProps & AsChildProp>

export type { CardHeaderProps }
