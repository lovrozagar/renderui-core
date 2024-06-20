import { NonNullableVariantProps } from '@/components/_shared/types/variants'
import { ButtonProps } from '@/components/button'
import { tabsCursorClasses } from '@/components/tabs/classes/tabs-cursor-classes'
import { TabsProps } from '@/components/tabs/types/tabs'

type TabsContext = {
  activeTab: string | number
  layoutId: string
  orientation: TabsProps['orientation']
  variant: NonNullableVariantProps<typeof tabsCursorClasses>['variant']
  color: ButtonProps['color']
  type: TabsProps['type']
  hasCursorAppearedRef: React.MutableRefObject<boolean>
  setActiveTab: React.Dispatch<React.SetStateAction<string | number>>
}

export type { TabsContext }
