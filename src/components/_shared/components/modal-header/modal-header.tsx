import { cx } from '@renderui/utils'

import { Grid, type GridProps } from '@/components/grid'

const ModalHeader = (props: GridProps) => {
	const { className, ...restProps } = props

	return (
		<Grid
			data-slot='header'
			className={cx('render-ui-modal-header gap-0.5 pb-4', className)}
			{...restProps}
		/>
	)
}

export { ModalHeader }
