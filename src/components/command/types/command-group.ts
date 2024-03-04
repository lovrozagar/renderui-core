import { CommandGroup as CommandGroupPrimitive } from 'cmdk'

type CommandGroupPrimitiveType = typeof CommandGroupPrimitive

type CommandGroupRef = React.ElementRef<CommandGroupPrimitiveType>

type CommandGroupProps = React.ComponentPropsWithoutRef<CommandGroupPrimitiveType>

export type { CommandGroupProps, CommandGroupRef }
