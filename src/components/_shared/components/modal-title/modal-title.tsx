import { cn } from '@renderui/utils'
import type { ComponentPropsWithRef } from 'react'

import { DialogTitle } from '@radix-ui/react-dialog'

const ModalTitle = (props: ComponentPropsWithRef<typeof DialogTitle>) => {
	const { className, ...restProps } = props

	return (
		<DialogTitle
			data-slot='title'
			className={cn('_modal-title font-semibold text-mode-contrast', className)}
			{...restProps}
		/>
	)
}

export { ModalTitle }
