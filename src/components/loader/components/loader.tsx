import { cn, polymorphic } from '@renderui/utils'
import React from 'react'

import { loaderClasses } from '@/components/loader/classes/loader-classes'
import { LoaderDot } from '@/components/loader/components/loader-dot'
import { LOADER_DOTS } from '@/components/loader/constants/constants'
import type { LoaderProps } from '@/components/loader/types/loader'

const Loader = (props: LoaderProps) => {
	const {
		asChild,
		isPaused,
		position = 'relative',
		variant = 'half',
		size = 'sm',
		className,
		...restProps
	} = props

	const Component = polymorphic(asChild, 'span')

	return (
		<Component
			aria-label='loading'
			className={cn(
				loaderClasses({
					variant,
					isPaused,
					size,
					position,
				}),
				className,
			)}
			{...restProps}
		>
			{Boolean(variant === 'dots') && (
				<>
					{LOADER_DOTS.map((element) => (
						<LoaderDot key={element} isPaused={isPaused} element={element} />
					))}
				</>
			)}
		</Component>
	)
}

export { Loader }
