'use client'

import { AccordionItem as AccordionItemPrimitive } from '@radix-ui/react-accordion'
import { cn } from '@renderui/utils'

import { DEFAULT_ACCORDION_ITEM_CLASSNAME } from '@/components/accordion/constants/constants'
import type { AccordionItemProps } from '@/components/accordion/types/accordion-item'

const AccordionItem = (props: AccordionItemProps) => {
	const { className, ...restProps } = props

	return (
		<AccordionItemPrimitive
			data-slot='item'
			className={cn(DEFAULT_ACCORDION_ITEM_CLASSNAME, className)}
			{...restProps}
		/>
	)
}

export { AccordionItem }
