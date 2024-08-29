import { Text } from '@/components/text/components/text'
import type { TextProps } from '@/components/text/types/text'
import { cx } from '@renderui/utils'

const ModalDescription = (props: TextProps) => {
	const { className, size = 'sm', ...restProps } = props

	return (
		<Text
			data-slot='description'
			size={size}
			className={cx('render-ui-modal-description text-muted', className)}
			{...restProps}
		/>
	)
}

export { ModalDescription }
