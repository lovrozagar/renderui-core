import { AccordionHeader as AccordionHeaderPrimitive } from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { Simplify } from '@renderui/types'
import React from 'react'

import { ButtonProps, ButtonRef } from '@/components/button'


type AccordionTriggerRef = ButtonRef

type AccordionTriggerButtonProps = Omit<ButtonProps, 'children'>

type AccordionTriggerTriggerProps = {
  children?: React.ReactNode
  hasIcon?: boolean
  icon?: React.ReactNode
  iconProps?: React.ComponentPropsWithoutRef<typeof ChevronDownIcon>
  accordionHeaderProps?: React.ComponentPropsWithoutRef<typeof AccordionHeaderPrimitive>
}

type AccordionTriggerProps = Simplify<AccordionTriggerButtonProps & AccordionTriggerTriggerProps>

export type { AccordionTriggerProps, AccordionTriggerRef }
