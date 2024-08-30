import type { GridProps } from '@/components/grid/types/grid'
import { cx } from '@renderui/utils'

const ModalHeader = (props: GridProps) => {
	const { className, ...restProps } = props

	return (
		<header
			data-slot='header'
			className={cx('render-ui-modal-header grid gap-0.5 pb-4', className)}
			{...restProps}
		/>
	)
}

export { ModalHeader }
