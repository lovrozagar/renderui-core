import { cx } from '@renderui/utils'
import React, { type ComponentProps } from 'react'

import { DialogTitle } from '@radix-ui/react-dialog'

const ModalTitle = (props: ComponentProps<typeof DialogTitle>) => {
	const { ref, className, color = 'mode-contrast', ...restProps } = props

	return (
		<DialogTitle
			ref={ref}
			color={color}
			data-slot='title'
			className={cx('render-ui-modal-title font-semibold', className)}
			{...restProps}
		/>
	)
}

export { ModalTitle }
