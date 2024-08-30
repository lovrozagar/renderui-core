'use client'

import type { ContainerProps } from '@/components/container/types/container'
import { cn, polymorphic } from '@renderui/utils'

const Container = (props: ContainerProps) => {
	const { asChild, isFullHeight, className, ...restProps } = props

	const Component = polymorphic(asChild, 'div')

	return (
		<Component
			className={cn(
				'_container w-full mx-auto px-4 md:px-6 lg:px-8 2xl:max-w-screen-2xl',
				isFullHeight ? 'min-h-screen' : '',
				className,
			)}
			{...restProps}
		/>
	)
}

export { Container }
