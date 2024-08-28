import { cn, polymorphic } from '@renderui/utils'

import { DEFAULT_CARD_BODY_CLASSNAME } from '@/components/card/constants/constants'
import type { CardBodyProps } from '@/components/card/types/card-body'

const CardBody = (props: CardBodyProps) => {
	const { asChild, className, ...restProps } = props

	const Component = polymorphic(asChild, 'div')

	return (
		<Component
			data-slot='body'
			className={cn(DEFAULT_CARD_BODY_CLASSNAME, className)}
			{...restProps}
		/>
	)
}

export { CardBody }
