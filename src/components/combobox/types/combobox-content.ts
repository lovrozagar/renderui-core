import type { Simplify } from '@/components/_shared/types/simplify'
import type React from 'react'

import type {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandList,
} from '@/components/command'
import type { PopoverContentProps } from '@/components/popover'
import type { ScrollArea } from '@/components/scroll-area'

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
