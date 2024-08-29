import type { Simplify } from '@/components/_shared/types/simplify'
import type { Command } from '@/components/command/components/command'
import type { CommandEmpty } from '@/components/command/components/command-empty'
import type { CommandGroup } from '@/components/command/components/command-group'
import type { CommandInput } from '@/components/command/components/command-input'
import type { CommandList } from '@/components/command/components/command-list'
import type { PopoverContentProps } from '@/components/popover/types/popover-content'
import type { ScrollArea } from '@/components/scroll-area/components/scroll-area'
import type React from 'react'

type ComboboxContentPopoverContentProps = PopoverContentProps

type ComboboxContentCustomProps = {
	placeholder?: string
	hasEmptyContent?: boolean
	hasScroll?: boolean
	emptyContent?: React.ReactNode
	commandProps?: React.ComponentPropsWithRef<typeof Command>
	commandInputProps?: React.ComponentPropsWithRef<typeof CommandInput>
	commandEmptyProps?: React.ComponentPropsWithRef<typeof CommandEmpty>
	commandGroupProps?: React.ComponentPropsWithRef<typeof CommandGroup>
	commandListProps?: React.ComponentPropsWithRef<typeof CommandList>
	scrollAreaProps?: React.ComponentPropsWithRef<typeof ScrollArea>
}

type ComboboxContentProps = Simplify<
	ComboboxContentPopoverContentProps & ComboboxContentCustomProps
>

export type { ComboboxContentProps }
