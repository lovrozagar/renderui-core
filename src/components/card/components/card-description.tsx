import { cn } from '@renderui/utils'

import { DEFAULT_CARD_DESCRIPTION_CLASSNAME } from '@/components/card/constants/constants'
import type { CardDescriptionProps } from '@/components/card/types/card-description'
import { Text } from '@/components/text/components/text'

const CardDescription = (props: CardDescriptionProps) => {
	const { className, size = 'sm', ...restProps } = props

	return (
		<Text
			size={size}
			data-slot='description'
			className={cn(DEFAULT_CARD_DESCRIPTION_CLASSNAME, className)}
			{...restProps}
		/>
	)
}

export { CardDescription }
