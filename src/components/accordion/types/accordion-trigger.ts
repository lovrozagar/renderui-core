import { AccordionHeader as AccordionHeaderPrimitive } from '@radix-ui/react-accordion'
import { Simplify } from '@/components/_shared/types/simplify'
import React from 'react'

import { ChevronDownIcon } from '@/components/_shared/components/icons/chevron-down-icon'
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
