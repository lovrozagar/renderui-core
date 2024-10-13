import { cn } from '@renderui/utils'

import type { SeparatorProps } from '@/components/separator/types/separator'

function getMergedClassName(
	className: SeparatorProps['className'],
	orientation: SeparatorProps['orientation'],
) {
	return cn(
		'_separator shrink-0 border-mode-750 transition-[background-color]',
		orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full self-stretch w-[1px]',
		className,
	)
}

export { getMergedClassName }
