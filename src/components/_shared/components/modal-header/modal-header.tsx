import type { GridProps } from '@/components/grid/types/grid'
import { cn } from '@renderui/utils'

const ModalHeader = (props: GridProps) => {
	const { className, ...restProps } = props

	return (
		<header
			data-slot='header'
			className={cn('_modal-header grid gap-0.5 pb-4', className)}
			{...restProps}
		/>
	)
}

export { ModalHeader }
