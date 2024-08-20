import { ScrollAreaProps } from '@/components/scroll-area/types/scroll-area'

// eslint-disable-next-line max-params
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
