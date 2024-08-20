import type { Simplify } from '@/components/_shared/types/simplify'
import type React from 'react'

import type { AsChildProp } from '@/components/_shared/types/as-child'

type CardFooterPrimitiveProps = Omit<React.ComponentPropsWithRef<'div'>, 'className'>

type CardFooterCustomProps = {
	startContent?: React.ReactNode
	endContent?: React.ReactNode
	childrenClassName?: string
	contentClassName?: string
	childrenContainerProps?: Simplify<React.ComponentPropsWithRef<'span'> & AsChildProp>
}

type CardFooterProps = Simplify<CardFooterPrimitiveProps & CardFooterCustomProps & AsChildProp>

export type { CardFooterProps }
