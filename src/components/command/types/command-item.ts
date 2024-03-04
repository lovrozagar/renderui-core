import { CommandItem as CommandItemPrimitive } from 'cmdk'

type CommandItemPrimitiveType = typeof CommandItemPrimitive

type CommandItemRef = React.ElementRef<CommandItemPrimitiveType>

type CommandItemProps = React.ComponentPropsWithoutRef<CommandItemPrimitiveType>

export type { CommandItemProps, CommandItemRef }
