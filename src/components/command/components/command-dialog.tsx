import { cx } from '@renderui/utils'

import { Command } from '@/components/command/components/command'
import {
	COMMAND_DIALOG_COMMAND_CLASSNAME,
	COMMAND_DIALOG_CONTENT_CLASSNAME,
} from '@/components/command/constants/constants'
import type { CommandDialogProps } from '@/components/command/types/command-dialog'
import { Dialog, DialogContent } from '@/components/dialog'

const CommandDialog = (props: CommandDialogProps) => {
	const { children, ...restProps } = props

	return (
		<Dialog {...restProps}>
			<DialogContent className={cx(COMMAND_DIALOG_CONTENT_CLASSNAME)}>
				<Command className={cx(COMMAND_DIALOG_COMMAND_CLASSNAME)}>{children}</Command>
			</DialogContent>
		</Dialog>
	)
}

export { CommandDialog }
