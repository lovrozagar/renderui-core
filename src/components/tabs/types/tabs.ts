import { Tabs as TabsPrimitive } from '@radix-ui/react-tabs'
import { Simplify } from '@/components/_shared/types/simplify'

import { NonNullableVariantProps } from '@/components/_shared/types/variants'
import { ButtonProps } from '@/components/button/types/button'
import { tabsCursorClasses } from '@/components/tabs/classes/tabs-cursor-classes'

type TabsPrimitiveType = typeof TabsPrimitive

type TabsRef = React.ElementRef<TabsPrimitiveType>

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
  onValueChange?: ((value: string | number) => void) | undefined
}

type TabsVariantProps = NonNullableVariantProps<typeof tabsCursorClasses>

type TabsProps = Simplify<TabsPrimitiveProps & TabsCustomProps & TabsVariantProps>

export type { TabsProps, TabsRef }
