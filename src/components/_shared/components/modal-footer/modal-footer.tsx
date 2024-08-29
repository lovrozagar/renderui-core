import { Flex } from '@/components/flex/components/flex'
import type { FlexProps } from '@/components/flex/types/flex'
import { cx } from '@renderui/utils'

const ModalFooter = (props: FlexProps) => {
	const { className, ...restProps } = props

	return (
		<Flex
			data-slot='footer'
			className={cx(
				'render-ui-modal-footer flex flex-col-reverse gap-2 pt-4 sm:flex-row sm:items-center sm:justify-end',
				className,
			)}
			{...restProps}
		/>
	)
}

export { ModalFooter }
