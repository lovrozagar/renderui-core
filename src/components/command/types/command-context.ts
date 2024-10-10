import type { Color } from '@/components/_shared/types/color'
import type { CommandProps } from '@/components/command/types/command'

type CommandContext = {
	type: CommandProps['type']
	color: Color
	setValue: React.Dispatch<React.SetStateAction<string | (readonly string[] & string)>>
}

export type { CommandContext }
