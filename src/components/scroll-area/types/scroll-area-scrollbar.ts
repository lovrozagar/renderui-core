import type { Simplify } from '@/components/_shared/types/simplify'
import type {
	Scrollbar as ScrollAreaScrollbarPrimitive,
	ScrollAreaThumb as ScrollAreaThumbPrimitive,
	ScrollAreaViewport as ScrollAreaViewportPrimitive,
} from '@radix-ui/react-scroll-area'
import type React from 'react'

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
