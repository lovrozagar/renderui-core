import { Simplify } from '@/components/_shared/types/simplify'
import React from 'react'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from '@/components/command'
import { PopoverContentProps, PopoverContentRef } from '@/components/popover'
import { ScrollArea } from '@/components/scroll-area'

type ComboboxContentRef = PopoverContentRef

type ComboboxContentPopoverContentProps = PopoverContentProps

type ComboboxContentCustomProps = {
  placeholder?: string
  hasEmptyContent?: boolean
  hasScroll?: boolean
  emptyContent?: React.ReactNode
  commandProps?: React.ComponentPropsWithoutRef<typeof Command>
  commandInputProps?: React.ComponentPropsWithoutRef<typeof CommandInput>
  commandEmptyProps?: React.ComponentPropsWithoutRef<typeof CommandEmpty>
  commandGroupProps?: React.ComponentPropsWithoutRef<typeof CommandGroup>
  commandListProps?: React.ComponentPropsWithoutRef<typeof CommandList>
  scrollAreaProps?: React.ComponentPropsWithoutRef<typeof ScrollArea>
}

type ComboboxContentProps = Simplify<
  ComboboxContentPopoverContentProps & ComboboxContentCustomProps
>

export type { ComboboxContentProps, ComboboxContentRef }
