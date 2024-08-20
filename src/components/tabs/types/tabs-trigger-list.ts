import { TabsList as TabsTriggerListPrimitive } from '@radix-ui/react-tabs'
import { Simplify } from '@/components/_shared/types/simplify'

type TabsTriggerListPrimitiveType = typeof TabsTriggerListPrimitive

type TabsTriggerListPrimitiveProps = React.ComponentProps<TabsTriggerListPrimitiveType>

type TabsTriggerListProps = Simplify<TabsTriggerListPrimitiveProps>

export type { TabsTriggerListProps }
