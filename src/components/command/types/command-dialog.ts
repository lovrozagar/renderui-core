import type { Simplify } from '@/components/_shared/types/simplify'
import type { CommandProps } from '@/components/command/types/command'
import type { DialogProps } from '@/components/dialog/types/dialog'
import type { DialogContentProps } from '@/components/dialog/types/dialog-content'

type CommandDialogProps = Simplify<
	CommandProps & {
		dialogProps?: DialogProps
		dialogContentProps?: DialogContentProps
	}
>

export type { CommandDialogProps }
