'use client'

import { Accordion as AccordionPrimitive } from '@radix-ui/react-accordion'
import { cn } from '@renderui/utils'

import type { AccordionProps } from '@/components/accordion/types/accordion'

const Accordion = (props: AccordionProps) => {
	const { className, ...restProps } = props

	return (
		<AccordionPrimitive data-slot='base' className={cn('_accordion', className)} {...restProps} />
	)
}

export { Accordion }
