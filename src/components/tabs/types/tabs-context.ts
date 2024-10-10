import type { NonNullableVariantProps } from '@/components/_shared/types/variant'
import type { ButtonProps } from '@/components/button/types/button'
import type { tabsCursorClasses } from '@/components/tabs/classes/tabs-cursor-classes'
import type { TabsProps } from '@/components/tabs/types/tabs'

type TabsContext = {
	activeTab: string | number
	layoutId: string
	orientation: TabsProps['orientation']
	variant: NonNullableVariantProps<typeof tabsCursorClasses>['variant']
	color: ButtonProps['color']
	type: TabsProps['type']
	animationDuration: number | undefined
	hasCursor: boolean
	hasCursorAppearedRef: React.RefObject<boolean>
	setActiveTab: React.Dispatch<React.SetStateAction<string | number>>
}

export type { TabsContext }
