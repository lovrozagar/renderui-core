import type { BoxProps } from '@/components/box/types/box'
import { cn, polymorphic } from '@renderui/utils'

const Box = (props: BoxProps) => {
	const { asChild, className, grow, noShrink, ...restProps } = props

	const Component = polymorphic(asChild, 'div')

	return (
		<Component
			className={cn('render-ui-box', grow ? 'grow' : '', noShrink ? 'shrink-0' : '', className)}
			{...restProps}
		/>
	)
}

export { Box }
