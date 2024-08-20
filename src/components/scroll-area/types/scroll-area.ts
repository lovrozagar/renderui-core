import {
	ScrollArea as ScrollAreaPrimitive,
	ScrollAreaThumb as ScrollAreaThumbPrimitive,
	ScrollAreaViewport as ScrollAreaViewportPrimitive,
	Scrollbar as ScrollAreaScrollbarPrimitive,
} from '@radix-ui/react-scroll-area'
import { Simplify } from '@/components/_shared/types/simplify'
import React from 'react'

type ScrollAreaPrimitiveType = typeof ScrollAreaPrimitive

type ScrollAreaPrimitiveProps = React.ComponentPropsWithRef<ScrollAreaPrimitiveType> & {
	orientation?: 'horizontal' | 'vertical' | 'both'
}

type ScrollOverflowVisibility = 'auto' | 'top' | 'bottom' | 'left' | 'right' | 'both' | 'none'

type ScrollAreaChildrenProps = {
	scrollbarProps?: React.ComponentPropsWithRef<typeof ScrollAreaScrollbarPrimitive>
	thumbProps?: React.ComponentPropsWithRef<typeof ScrollAreaThumbPrimitive>
	viewportProps?: React.ComponentPropsWithRef<typeof ScrollAreaViewportPrimitive>
	hasScrollShadow?: boolean
	scrollShadowSize?: number
	scrollShadowOffset?: number
	scrollShadowVisibility?: ScrollOverflowVisibility
	onScrollShadowVisiblityChange?: (overflow: ScrollOverflowVisibility) => void
}

type ScrollAreaProps = Simplify<ScrollAreaPrimitiveProps & ScrollAreaChildrenProps>

export type { ScrollAreaProps }
