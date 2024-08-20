import { TabsContent as TabsContentPrimitive } from '@radix-ui/react-tabs'
import { Simplify } from '@/components/_shared/types/simplify'

type TabsContentPrimtiiveType = typeof TabsContentPrimitive

type TabsContentPrimitiveProps = React.ComponentProps<TabsContentPrimtiiveType>

type TabsContentProps = Simplify<TabsContentPrimitiveProps>

export type { TabsContentProps }
