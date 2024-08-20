import { initializeContext } from '@renderui/utils'

import type { TabsContext } from '@/components/tabs/types/tabs-context'

const [TabsProvider, useTabsContext] = initializeContext<TabsContext>({
	errorMessage: 'Components using useTabsContext must be wrapped in a <Tabs /> component.',
	providerName: 'TabsProvider',
	hookName: 'useTabsContext',
	name: 'TabsContext',
	strict: true,
})

export { TabsProvider, useTabsContext }
