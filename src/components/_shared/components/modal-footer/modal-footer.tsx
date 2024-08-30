import type { FlexProps } from '@/components/flex/types/flex'
import { cn, cx } from '@renderui/utils'

const ModalFooter = (props: FlexProps) => {
	const { className, ...restProps } = props

	return (
		<div
			data-slot='footer'
			className={cn(
				'_modal-footer flex flex-col-reverse gap-2 pt-4 sm:flex-row sm:items-center sm:justify-end',
				className,
			)}
			{...restProps}
		/>
	)
}

export { ModalFooter }
