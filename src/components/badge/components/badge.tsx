import { DEFAULT_BADGE_CONSTANTS } from '@/components/badge/constants/constants'
import type { BadgeProps } from '@/components/badge/types/badge'
import { cn, polymorphic } from '@renderui/utils'

const Badge = (props: BadgeProps) => {
	const { asChild, className, ...restProps } = props

	const Component = polymorphic(asChild, 'div')

	return <Component className={cn(DEFAULT_BADGE_CONSTANTS, className)} {...restProps} />
}

export { Badge }
