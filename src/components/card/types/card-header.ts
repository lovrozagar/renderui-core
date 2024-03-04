import { Simplify } from '@renderui/types'
import React from 'react'

import { AsChildProp } from '@/components/_shared/types/as-child'

type CardHeaderRef = React.ElementRef<'div'>

type CardHeaderPrimitiveProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'className'>

type CardHeaderCustomProps = {
  startContent?: React.ReactNode
  endContent?: React.ReactNode
  childrenClassName?: string
  contentClassName?: string
  childrenContainerProps?: Simplify<React.ComponentPropsWithoutRef<'span'> & AsChildProp>
}

type CardHeaderProps = Simplify<CardHeaderPrimitiveProps & CardHeaderCustomProps & AsChildProp>

export type { CardHeaderProps, CardHeaderRef }
