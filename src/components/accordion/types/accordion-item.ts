import { AccordionItem as AccordionItemPrimitive } from '@radix-ui/react-accordion'
import React from 'react'

type AccordionItemPrimitiveType = typeof AccordionItemPrimitive

type AccordionItemRef = React.ElementRef<AccordionItemPrimitiveType>

type AccordionItemProps = React.ComponentPropsWithoutRef<AccordionItemPrimitiveType>

export type { AccordionItemProps, AccordionItemRef }
