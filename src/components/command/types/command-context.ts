import type { CommandProps } from '@/components/command/types/command'

type CommandContext = {
	type: CommandProps['type']
	color: CommandProps['color']
	setValue: React.Dispatch<React.SetStateAction<string | (readonly string[] & string)>>
	onSelect: CommandProps['onSelect']
}

export type { CommandContext }
