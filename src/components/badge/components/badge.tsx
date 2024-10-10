import { DEFAULT_BADGE_CONSTANTS } from '@/components/badge/constants/constants'
import type { BadgeProps } from '@/components/badge/types/badge'
import { cn, polymorphic } from '@renderui/utils'
import type { CSSProperties } from 'react'

const Badge = (props: BadgeProps) => {
	const { asChild, className, style, color = 'mode-accent', ...restProps } = props

	const Component = polymorphic(asChild, 'div')

	return (
		<Component
			className={cn(DEFAULT_BADGE_CONSTANTS, className)}
			style={{ ...style, '--badge-color': `var(--${color})` } as CSSProperties}
			{...restProps}
		/>
	)
}

export { Badge }
