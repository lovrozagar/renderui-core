import {
	ScrollAreaThumb as ScrollAreaThumbPrimitive,
	ScrollAreaViewport as ScrollAreaViewportPrimitive,
	Scrollbar as ScrollAreaScrollbarPrimitive,
} from '@radix-ui/react-scroll-area'
import { Simplify } from '@/components/_shared/types/simplify'
import React from 'react'

type ScrollAreaScrollBarPrimitiveType = typeof ScrollAreaScrollbarPrimitive

type ScrollAreaScrollbarpPrimitiveProps =
	React.ComponentPropsWithRef<ScrollAreaScrollBarPrimitiveType>

type ScrollAreaScrollbarThumbProps = {
	viewportRef: React.RefObject<React.ElementRef<typeof ScrollAreaViewportPrimitive>> | null
	thumbProps: React.ComponentPropsWithRef<typeof ScrollAreaThumbPrimitive> | undefined
}

type ScrollAreaScrollbarProps = Simplify<
	ScrollAreaScrollbarpPrimitiveProps & ScrollAreaScrollbarThumbProps
>

export type { ScrollAreaScrollbarProps }
