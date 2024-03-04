'use client'

import { Accordion as AccordionPrimitive } from '@radix-ui/react-accordion'
import { cn } from '@renderui/utils'
import React from 'react'

import { AccordionProps, AccordionRef } from '@/components/accordion/types/accordion'

const Accordion = React.forwardRef<AccordionRef, AccordionProps>((props, ref) => {
  const { className, ...restProps } = props

  return (
    <AccordionPrimitive ref={ref} className={cn('render-ui-accordion', className)} {...restProps} />
  )
})

Accordion.displayName = 'Accordion'

export { Accordion }
