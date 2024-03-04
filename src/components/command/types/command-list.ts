import { CommandList as CommandListPrimitive } from 'cmdk'

type CommandListPrimitiveType = typeof CommandListPrimitive

type CommandListRef = React.ElementRef<CommandListPrimitiveType>

type CommandListProps = React.ComponentPropsWithoutRef<CommandListPrimitiveType>

export type { CommandListProps, CommandListRef }
