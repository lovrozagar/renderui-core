import { TabsList as TabsTriggerListPrimitive } from '@radix-ui/react-tabs'
import { Simplify } from '@/components/_shared/types/simplify'

type TabsTriggerListPrimitiveType = typeof TabsTriggerListPrimitive

type TabsTriggerListRef = React.ElementRef<TabsTriggerListPrimitiveType>

type TabsTriggerListPrimitiveProps = React.ComponentProps<TabsTriggerListPrimitiveType>

type TabsTriggerListProps = Simplify<TabsTriggerListPrimitiveProps>

export type { TabsTriggerListProps, TabsTriggerListRef }
