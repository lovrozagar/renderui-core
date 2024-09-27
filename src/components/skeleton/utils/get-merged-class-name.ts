import { cn } from '@renderui/utils'

import type { SkeletonProps } from '@/components/skeleton/types/skeleton'

function getMergedClassName(
	className: SkeletonProps['className'],
	variant: SkeletonProps['variant'],
	type: SkeletonProps['type'],
) {
	return cn(
		'_skeletion rounded bg-mode-accent overflow-hidden',
		variant === 'pulse'
			? 'animate-[pulse_1500ms_infinite]'
			: 'relative isolate w-full before:content-[""] before:absolute before:inline-block before:inset-0 before:z-[1] before:rounded-[inherit] before:animate-slide before:bg-gradient-to-r before:from-transparent before:via-mode-750 before:to-transparent',
		type === 'layer' ? 'absolute inset-0 size-full rounded-[inherit] overflow-hidden z-[2]' : '',
		className,
	)
}

export { getMergedClassName }
