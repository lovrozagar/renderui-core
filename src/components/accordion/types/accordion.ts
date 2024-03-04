import { Accordion as AccordionPrimitive } from '@radix-ui/react-accordion'

type AccordionPrimitiveType = typeof AccordionPrimitive

type AccordionRef = React.ElementRef<AccordionPrimitiveType>

type AccordionProps = React.ComponentPropsWithoutRef<AccordionPrimitiveType>

export type { AccordionProps, AccordionRef }
