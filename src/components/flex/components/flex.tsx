'use client'

import type { FlexProps } from '@/components/flex/types/flex'
import { cn, polymorphic } from '@renderui/utils'

const Flex = (props: FlexProps) => {
	const { asChild, children, growChildren, center, className, ...restProps } = props

	const Component = polymorphic(asChild, 'div')

	return (
		<Component
			className={cn(
				'_flex flex',
				growChildren ? 'grow-children' : '',
				center ? 'justify-center items-center' : '',
				className,
			)}
			{...restProps}
		>
			{children}
		</Component>
	)
}

export { Flex }
