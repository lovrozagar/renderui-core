import { AccordionContent as AccordionContentPrimitive } from '@radix-ui/react-accordion'
import { Simplify } from '@renderui/types'
import React from 'react'

import { AsChildProp } from '@/components/_shared/types/as-child'
import { AnimationStyleVariables } from '@/components/_shared/utils/get-animation-style-variables'

type AccordionContentPrimitiveType = typeof AccordionContentPrimitive

type AccordionContentRef = React.ElementRef<AccordionContentPrimitiveType>

type AccordionContentPrimitiveProps = React.ComponentPropsWithoutRef<AccordionContentPrimitiveType>

type AccordionContentChildrenContainerProps = {
  childrenContainerProps?: Simplify<React.ComponentPropsWithoutRef<'div'> & AsChildProp>
  animationDuration?: number
} & AnimationStyleVariables

type AccordionContentProps = Simplify<
  AccordionContentPrimitiveProps & AccordionContentChildrenContainerProps
>

export type { AccordionContentProps, AccordionContentRef }
