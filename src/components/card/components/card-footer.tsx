import { cn, getOptionalObject, polymorphic } from '@renderui/utils'

import {
	DEFAULT_CARD_FOOTER_CHILDREN_CLASSNAME,
	DEFAULT_CARD_FOOTER_CLASSNAME,
} from '@/components/card/constants/constants'
import type { CardFooterProps } from '@/components/card/types/card-footer'

const CardFooter = (props: CardFooterProps) => {
	const {
		asChild,
		childrenContainerProps,
		contentClassName,
		childrenClassName,
		startContent,
		endContent,
		children,
		...restProps
	} = props

	const {
		asChild: childrenContainerAsChild,
		className: childrenContainerClassName,
		...restChildrenContainerProps
	} = getOptionalObject(childrenContainerProps)

	const ContentComponent = polymorphic(asChild, 'div')

	const ChildrenContainerComponent = polymorphic(childrenContainerAsChild, 'span')

	return (
		<ContentComponent
			data-slot='footer'
			className={cn(DEFAULT_CARD_FOOTER_CHILDREN_CLASSNAME, contentClassName)}
			{...restProps}
		>
			{startContent}
			<ChildrenContainerComponent
				data-slot='footer-children-container'
				className={cn(DEFAULT_CARD_FOOTER_CLASSNAME, childrenClassName, childrenContainerClassName)}
				{...restChildrenContainerProps}
			>
				{children}
			</ChildrenContainerComponent>
			{endContent}
		</ContentComponent>
	)
}

export { CardFooter }
