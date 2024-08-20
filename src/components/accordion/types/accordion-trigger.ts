import { Simplify } from '@/components/_shared/types/simplify'
import { AccordionHeader as AccordionHeaderPrimitive } from '@radix-ui/react-accordion'
import React from 'react'

import { ChevronDownIcon } from '@/components/_shared/components/icons/chevron-down-icon'
import { ButtonProps } from '@/components/button'

type AccordionTriggerButtonProps = Omit<ButtonProps, 'children'>

type AccordionTriggerTriggerProps = {
	children?: React.ReactNode
	hasIcon?: boolean
	icon?: React.ReactNode
	iconProps?: React.ComponentPropsWithRef<typeof ChevronDownIcon>
	accordionHeaderProps?: React.ComponentPropsWithRef<typeof AccordionHeaderPrimitive>
}

type AccordionTriggerProps = Simplify<AccordionTriggerButtonProps & AccordionTriggerTriggerProps>

export type { AccordionTriggerProps }
