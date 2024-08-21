import type { Simplify } from '@/components/_shared/types/simplify'

import type { HoverCardProps as HoverCardPrimitiveProps } from '@radix-ui/react-hover-card'

type HoverCardProps = Simplify<HoverCardPrimitiveProps & { shouldTriggerToggleOpen?: boolean }>

export type { HoverCardProps }
