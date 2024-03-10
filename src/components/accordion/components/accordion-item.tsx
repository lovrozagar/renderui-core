'use client'

import { AccordionItem as AccordionItemPrimitive } from '@radix-ui/react-accordion'
import { cn } from '@renderui/utils'
import React from 'react'

import { DEFAULT_ACCORDION_ITEM_CLASSNAME } from '@/components/accordion/constants/constants'
import { AccordionItemProps, AccordionItemRef } from '@/components/accordion/types/accordion-item'

const AccordionItem = React.forwardRef<AccordionItemRef, AccordionItemProps>((props, ref) => {
  const { className, ...restProps } = props

  return (
    <AccordionItemPrimitive
      ref={ref}
      className={cn(DEFAULT_ACCORDION_ITEM_CLASSNAME, className)}
      {...restProps}
    />
  )
})

AccordionItem.displayName = 'AccordionItem'

export { AccordionItem }
