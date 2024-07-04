import { Tooltip as TooltipPrimitive } from '@radix-ui/react-tooltip'
import { Simplify } from '@/components/_shared/types/simplify'

type TooltipPrimitiveProps = Omit<
  React.ComponentProps<typeof TooltipPrimitive>,
  'disableHoverableContent' | 'delayDuration' | 'skipDelayDuration' | 'disableHoverableContent'
>

type TooltipProviderProps = {
  skipDelayDuration?: number | undefined
  delayDuration?: number | undefined
  isHoverableContentDisabled?: boolean | undefined
}

type TooltipProps = Simplify<TooltipPrimitiveProps & TooltipProviderProps>

export type { TooltipProps }
