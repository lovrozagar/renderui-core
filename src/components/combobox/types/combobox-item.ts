import { Simplify } from '@renderui/types'

import { CommandItemProps, CommandItemRef } from '@/components/command'

type ComboboxItemRef = CommandItemRef

type ComboboxItemCommandItemProps = Omit<CommandItemProps, 'value' | 'children'>

type ComboboxItemCustomProps = {
  value: string
  children: React.ReactNode
  startContent?: React.ReactNode
  endContent?: React.ReactNode
}

type ComboboxItemProps = Simplify<ComboboxItemCommandItemProps & ComboboxItemCustomProps>

export type { ComboboxItemProps, ComboboxItemRef }
