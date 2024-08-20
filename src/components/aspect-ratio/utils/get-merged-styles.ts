import { cn } from '@renderui/utils'

import { AspectRatioProps } from '@/components/aspect-ratio/types/aspect-ratio'

function getMergedStyles(
	ratio: AspectRatioProps['ratio'],
	className: AspectRatioProps['className'],
	style: AspectRatioProps['style'],
) {
	return {
		mergedClassName: cn('render-ui-aspect-ratio aspect-[var(--ratio)] overflow-hidden', className),
		mergedStyle: ratio ? { '--ratio': ratio, ...style } : style,
	}
}

export { getMergedStyles }
