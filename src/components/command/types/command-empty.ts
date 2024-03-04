import { CommandEmpty as CommandEmptyPrimitive } from 'cmdk'

type CommandEmptyPrimitiveType = typeof CommandEmptyPrimitive

type CommandEmptyRef = React.ElementRef<CommandEmptyPrimitiveType>

type CommandEmptyProps = React.ComponentPropsWithoutRef<CommandEmptyPrimitiveType>

export type { CommandEmptyProps, CommandEmptyRef }
