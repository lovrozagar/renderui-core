import { initializeContext } from '@renderui/utils'

import type { ToggleGroupContext } from '@/components/toggle-group/types/toggle-group-context'

const [ToggleGroupProvider, useToggleGroupContext] = initializeContext<ToggleGroupContext>({
	errorMessage:
		'Components using useToggleGroupContext must be wrapped in a <ToggleGroup /> component.',
	providerName: 'ToggleGroupProvider',
	hookName: 'useToggleGroupContext',
	name: 'ToggleGroupContext',
	strict: true,
})

export { ToggleGroupProvider, useToggleGroupContext }
