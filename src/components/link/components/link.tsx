import { linkClasses } from '@/components/link/classes/link-classes'
import type { LinkProps } from '@/components/link/types/link'
import { cn, polymorphic } from '@renderui/utils'
import type { CSSProperties } from 'react'

const Link = (props: LinkProps) => {
	const { asChild, className, style, underline, color = 'primary', ...restProps } = props

	const Component = polymorphic(asChild, 'a')

	return (
		<Component
			className={cn(linkClasses({ underline }), className)}
			style={
				{
					...style,
					'--link-color': `var(--${color})`,
				} as CSSProperties
			}
			{...restProps}
		/>
	)
}

export { Link }
