import { cn, polymorphic } from '@renderui/utils'
import React from 'react'

import { cardClasses } from '@/components/card/classes/card-classes'
import { CardProps } from '@/components/card/types/card'

const Card = (props: CardProps) => {
	const { asChild, className, isBlurred, hasShadowOnHover, ...restProps } = props

	const variantClassName = cardClasses({ isBlurred, hasShadowOnHover })

	const Component = polymorphic(asChild, 'div')

	return <Component data-slot='base' className={cn(variantClassName, className)} {...restProps} />
}

export { Card }
