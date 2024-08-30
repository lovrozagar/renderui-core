import { cn } from '@renderui/utils'

import type { VisuallyHiddenProps } from '@/components/visually-hidden/types/visually-hidden'

const VisuallyHidden = (props: VisuallyHiddenProps) => {
	const { className, ...restProps } = props

	return <span className={cn('_visually-hidden sr-only', className)} {...restProps} />
}

export { VisuallyHidden }
