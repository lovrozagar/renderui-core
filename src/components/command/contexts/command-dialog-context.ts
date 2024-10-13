'use client'

import { initializeContext } from '@renderui/utils'

import type { CommandDialogContext } from '@/components/command/types/command-dialog-context'

const [CommandDialogProvider, useCommandDialogContext] = initializeContext<CommandDialogContext>({
	strict: false,
	errorMessage: 'Components using command dialog context must be wrapped in a <CommandDialog />.',
	providerName: 'CommandDialogProvider',
	hookName: 'useCommandDialogContext',
	name: 'CommandDialogContext',
})

export { CommandDialogProvider, useCommandDialogContext }
