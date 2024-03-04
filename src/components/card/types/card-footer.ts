import { Simplify } from '@renderui/types'
import React from 'react'

import { AsChildProp } from '@/components/_shared/types/as-child'

type CardFooterRef = React.ElementRef<'div'>

type CardFooterPrimitiveProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'className'>

type CardFooterCustomProps = {
  startContent?: React.ReactNode
  endContent?: React.ReactNode
  childrenClassName?: string
  contentClassName?: string
  childrenContainerProps?: Simplify<React.ComponentPropsWithoutRef<'span'> & AsChildProp>
}

type CardFooterProps = Simplify<CardFooterPrimitiveProps & CardFooterCustomProps & AsChildProp>

export type { CardFooterProps, CardFooterRef }
