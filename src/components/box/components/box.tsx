import type { BoxProps } from '@/components/box/types/box'
import { cn, polymorphic } from '@renderui/utils'

const Box = (props: BoxProps) => {
	const { asChild, className, grow, noShrink, ...restProps } = props

	const Component = polymorphic(asChild, 'div')

	return (
		<Component
			className={cn(
				'_box',
				grow ? 'grow' : undefined,
				noShrink ? 'shrink-0' : undefined,
				className,
			)}
			{...restProps}
		/>
	)
}

export { Box }
