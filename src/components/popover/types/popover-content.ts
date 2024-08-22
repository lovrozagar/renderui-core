import type { ContentArrowProps } from '@/components/_shared/components/content-arrow/content-arrow'
import type { Simplify } from '@/components/_shared/types/simplify'
import type { PopoverContent as PopoverContentPrimitive } from '@radix-ui/react-popover'
import type { AnimationStyleVariables } from '@renderui/utils'
import type React from 'react'

type PopoverContentPrimitiveType = typeof PopoverContentPrimitive

type PopoverContentPrimitiveProps = Omit<
	React.ComponentPropsWithRef<PopoverContentPrimitiveType>,
	'onPointerDownOutside' | 'onFocusOutside' | 'onInteractOutside'
>

type PopoverContentCustomProps = {
	portalContainer?: HTMLElement | null | undefined
	hasTriggerHeight?: boolean
	hasTriggerWidth?: boolean
	hasTriggerMinWidth?: boolean
	hasTriggerMinHeight?: boolean
	hasTriggerMaxWidth?: boolean
	hasTriggerMaxHeight?: boolean
	hasArrow?: boolean
} & ContentArrowProps &
	AnimationStyleVariables

type PopoverContentProps = Simplify<PopoverContentPrimitiveProps & PopoverContentCustomProps>

export type { PopoverContentProps }
