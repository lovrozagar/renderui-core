import type { ScrollAreaProps } from '@/components/scroll-area/types/scroll-area'

function determineScrollVisibility(
	hasBefore: boolean,
	hasAfter: boolean,
	prefix: string,
	suffix: string,
) {
	if (hasBefore && hasAfter) {
		return 'both'
	}

	if (hasBefore) {
		return prefix as ScrollAreaProps['scrollShadowVisibility']
	}

	if (hasAfter) {
		return suffix as ScrollAreaProps['scrollShadowVisibility']
	}

	return 'none'
}

export { determineScrollVisibility }
