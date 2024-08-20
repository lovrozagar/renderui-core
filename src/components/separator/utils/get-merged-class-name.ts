import { cn } from '@renderui/utils'

import { SeparatorProps } from '@/components/separator/types/separator'

function getMergedClassName(
	className: SeparatorProps['className'],
	orientation: SeparatorProps['orientation'],
) {
	return cn(
		'render-ui-separator shrink-0 border-separator transition-[background-color]',
		orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
		className,
	)
}

export { getMergedClassName }
