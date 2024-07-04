import { Simplify } from '@/components/_shared/types/simplify'

import { CommandItemProps, CommandItemRef } from '@/components/command'

type ComboboxItemRef = CommandItemRef

type ComboboxItemCommandItemProps = Omit<CommandItemProps, 'value' | 'children'>

type ComboboxItemCustomProps = {
  value: string | number
  children: React.ReactNode
  startContent?: React.ReactNode
  endContent?: React.ReactNode
}

type ComboboxItemProps = Simplify<ComboboxItemCommandItemProps & ComboboxItemCustomProps>

export type { ComboboxItemProps, ComboboxItemRef }
