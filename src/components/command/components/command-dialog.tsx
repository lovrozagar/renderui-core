import { cx, getOptionalObject } from '@renderui/utils'

import { useControllableState } from '@/components/_shared/hooks/use-controllable-state'
import { Command } from '@/components/command/components/command'
import {
	COMMAND_DIALOG_COMMAND_CLASSNAME,
	COMMAND_DIALOG_CONTENT_CLASSNAME,
} from '@/components/command/constants/constants'
import { CommandDialogProvider } from '@/components/command/contexts/command-dialog-context'
import type { CommandDialogProps } from '@/components/command/types/command-dialog'
import { Dialog } from '@/components/dialog/components/dialog'
import { DialogContent } from '@/components/dialog/components/dialog-content'
import React from 'react'

const CommandDialog = (props: CommandDialogProps) => {
	const { className, children, dialogProps, dialogContentProps, ...restCommandProps } = props

	const {
		defaultOpen,
		open: openProp,
		onOpenChange,
		...restDialogProps
	} = getOptionalObject(dialogProps)
	const { closeButtonProps, ...restDialogContentProps } = getOptionalObject(dialogContentProps)

	const inputRef = React.useRef<HTMLInputElement | null>(null)

	const memoizedProviderValue = React.useMemo(() => ({ isDialog: true, inputRef }) as const, [])

	const [open, setOpen] = useControllableState({
		defaultProp: defaultOpen,
		prop: openProp,
		onChange: onOpenChange,
	})

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	React.useEffect(() => {
		setTimeout(() => {
			inputRef.current?.focus()
		}, 0)
	}, [open])

	return (
		<Dialog open={open} onOpenChange={setOpen} {...restDialogProps}>
			<DialogContent
				className={cx(COMMAND_DIALOG_CONTENT_CLASSNAME)}
				closeButtonProps={{
					className: cx('right-2 top-2 bg-background'),
				}}
				{...restDialogContentProps}
			>
				<CommandDialogProvider value={memoizedProviderValue}>
					<Command className={cx(COMMAND_DIALOG_COMMAND_CLASSNAME)} {...restCommandProps}>
						{children}
					</Command>
				</CommandDialogProvider>
			</DialogContent>
		</Dialog>
	)
}

export { CommandDialog }
