import { initializeContext } from '@renderui/utils'

import type { HoverCardContext } from '@/components/hover-card/types/hover-card-context'

const [HoverCardProvider, useHoverCardContext] = initializeContext<HoverCardContext>({
	errorMessage: 'Components using hoverCard context must be wrapped in a <HoverCard />.',
	providerName: 'HoverCardProvider',
	hookName: 'useHoverCardContext',
	name: 'HoverCardContext',
})

export { HoverCardProvider, useHoverCardContext }
