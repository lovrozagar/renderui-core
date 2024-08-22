import type { ContentArrowProps } from '@/components/_shared/components/content-arrow/content-arrow'
import type { Simplify } from '@/components/_shared/types/simplify'
import type { HoverCardContent as HoverCardContentPrimitive } from '@radix-ui/react-hover-card'
import type { AnimationStyleVariables } from '@renderui/utils'

type HoverCardPrimitiveProps = React.ComponentPropsWithRef<typeof HoverCardContentPrimitive>

type HoverCardContentProps = Simplify<
	HoverCardPrimitiveProps &
		AnimationStyleVariables &
		ContentArrowProps & {
			hasArrow?: boolean
		}
>

export type { HoverCardContentProps }
