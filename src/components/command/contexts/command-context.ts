'use client'

import { initializeContext } from '@renderui/utils'

import { CommandContext } from '@/components/command/types/command-context'

const [CommandProvider, useCommandContext] = initializeContext<CommandContext>({
  errorMessage: 'Components using command context must be wrapped in a <Command />.',
  providerName: 'CommandProvider',
  hookName: 'useCommandContext',
  name: 'CommandContext',
})

export { CommandProvider, useCommandContext }
