import { cx } from '@renderui/utils'

import { Text, type TextProps } from '@/components/text'

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
