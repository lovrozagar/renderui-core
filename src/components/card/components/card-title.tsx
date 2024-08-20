import { cx } from '@renderui/utils'
import React from 'react'

import { DEFAULT_CARD_TITLE_CLASSNAME } from '@/components/card/constants/constants'
import type { CardTitleProps } from '@/components/card/types/card-title'
import { Text } from '@/components/text'

const CardTitle = (props: CardTitleProps) => {
	const { className, size = 'md', ...restProps } = props

	return (
		<Text
			size={size}
			data-slot='title'
			className={cx(DEFAULT_CARD_TITLE_CLASSNAME, className)}
			{...restProps}
		/>
	)
}

export { CardTitle }
