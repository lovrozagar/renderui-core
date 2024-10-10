import type { Simplify } from '@/components/_shared/types/simplify'
import type { Tabs as TabsPrimitive } from '@radix-ui/react-tabs'
import { m } from 'framer-motion'

import type { NonNullableVariantProps } from '@/components/_shared/types/variant'
import type { ButtonProps } from '@/components/button/types/button'
import type { tabsCursorClasses } from '@/components/tabs/classes/tabs-cursor-classes'

type TabsPrimitiveType = typeof TabsPrimitive

type TabsPrimitiveProps = Omit<
	React.ComponentProps<TabsPrimitiveType>,
	'defaultValue' | 'value' | 'onValueChange' | 'activationMode'
>

type TabsCustomProps = {
	type?: 'focus' | 'click'
	color?: ButtonProps['color']
	defaultValue?: string | number
	value?: string | number
	animationDuration?: number
	hasCursor?: boolean
	cursorProps?: React.ComponentPropsWithRef<typeof m.span>
	onValueChange?: (value: unknown) => void
}

type TabsVariantProps = NonNullableVariantProps<typeof tabsCursorClasses>

type TabsProps = Simplify<TabsPrimitiveProps & TabsCustomProps & TabsVariantProps>

export type { TabsProps }
