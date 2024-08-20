import { initializeContext } from '@renderui/utils'

import type { PopoverContext } from '@/components/popover/types/popover-context'

const [PopoverProvider, usePopoverContext] = initializeContext<PopoverContext>({
	errorMessage: 'Components using popover context must be wrapped in a <Popover />.',
	providerName: 'PopoverProvider',
	hookName: 'usePopoverContext',
	name: 'PopoverContext',
})

export { PopoverProvider, usePopoverContext }
