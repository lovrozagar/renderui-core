import type { Simplify } from '@/components/_shared/types/simplify'
import type { TabsContent as TabsContentPrimitive } from '@radix-ui/react-tabs'

type TabsContentPrimtiiveType = typeof TabsContentPrimitive

type TabsContentPrimitiveProps = React.ComponentProps<TabsContentPrimtiiveType>

type TabsContentProps = Simplify<TabsContentPrimitiveProps>

export type { TabsContentProps }
