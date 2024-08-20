import type { Simplify } from '@/components/_shared/types/simplify'
import type { TabsList as TabsTriggerListPrimitive } from '@radix-ui/react-tabs'

type TabsTriggerListPrimitiveType = typeof TabsTriggerListPrimitive

type TabsTriggerListPrimitiveProps = React.ComponentProps<TabsTriggerListPrimitiveType>

type TabsTriggerListProps = Simplify<TabsTriggerListPrimitiveProps>

export type { TabsTriggerListProps }
