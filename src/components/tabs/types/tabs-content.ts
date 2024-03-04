import { TabsContent as TabsContentPrimitive } from '@radix-ui/react-tabs'
import { Simplify } from '@renderui/types'

type TabsContentPrimtiiveType = typeof TabsContentPrimitive

type TabsContentRef = React.ElementRef<TabsContentPrimtiiveType>

type TabsContentPrimitiveProps = React.ComponentProps<TabsContentPrimtiiveType>

type TabsContentProps = Simplify<TabsContentPrimitiveProps>

export type { TabsContentProps, TabsContentRef }
