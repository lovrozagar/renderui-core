import {
  ScrollArea as ScrollAreaPrimitive,
  ScrollAreaThumb as ScrollAreaThumbPrimitive,
  ScrollAreaViewport as ScrollAreaViewportPrimitive,
  Scrollbar as ScrollAreaScrollbarPrimitive,
} from '@radix-ui/react-scroll-area'
import { Simplify } from '@/components/_shared/types/simplify'
import React from 'react'

type ScrollAreaPrimitiveType = typeof ScrollAreaPrimitive

type ScrollAreaRef = React.ElementRef<ScrollAreaPrimitiveType>

type ScrollAreaPrimitiveProps = React.ComponentPropsWithoutRef<ScrollAreaPrimitiveType> & {
  orientation?: 'horizontal' | 'vertical' | 'both'
}

type ScrollOverflowVisibility = 'auto' | 'top' | 'bottom' | 'left' | 'right' | 'both' | 'none'

type ScrollAreaChildrenProps = {
  scrollbarProps?: React.ComponentPropsWithoutRef<typeof ScrollAreaScrollbarPrimitive>
  thumbProps?: React.ComponentPropsWithoutRef<typeof ScrollAreaThumbPrimitive>
  viewportProps?: React.ComponentPropsWithoutRef<typeof ScrollAreaViewportPrimitive>
  hasScrollShadow?: boolean
  scrollShadowSize?: number
  scrollShadowOffset?: number
  scrollShadowVisibility?: ScrollOverflowVisibility
  onScrollShadowVisiblityChange?: (overflow: ScrollOverflowVisibility) => void
}

type ScrollAreaProps = Simplify<ScrollAreaPrimitiveProps & ScrollAreaChildrenProps>

export type { ScrollAreaProps, ScrollAreaRef }
