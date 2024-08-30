import { cx } from '@renderui/utils'

import { DialogTitle } from '@radix-ui/react-dialog'
import type { ComponentPropsWithRef } from 'react'

const ModalDescription = (props: ComponentPropsWithRef<typeof DialogTitle>) => {
	const { className, ...restProps } = props

	return (
		<DialogTitle
			data-slot='description'
			className={cx('render-ui-modal-description text-muted text-sm', className)}
			{...restProps}
		/>
	)
}

export { ModalDescription }
