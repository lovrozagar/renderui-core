import type { Simplify } from '@/components/_shared/types/simplify'
import type { Tooltip as TooltipPrimitive } from '@radix-ui/react-tooltip'

type TooltipPrimitiveProps = Omit<
	React.ComponentPropsWithRef<typeof TooltipPrimitive>,
	'disableHoverableContent' | 'delayDuration' | 'skipDelayDuration' | 'disableHoverableContent'
>

type TooltipProviderProps = {
	skipDelayDuration?: number | undefined
	delayDuration?: number | undefined
	isHoverableContentDisabled?: boolean | undefined
}

type TooltipProps = Simplify<TooltipPrimitiveProps & TooltipProviderProps>

export type { TooltipProps }
