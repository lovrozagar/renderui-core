import { capitalize } from '@renderui/utils'

import { ScrollAreaProps } from '@/components/scroll-area/types/scroll-area'
import { determineScrollVisibility } from '@/components/scroll-area/utils/determine-scroll-visibility'

type SetScrollAttributes = {
	visibility: ScrollAreaProps['scrollShadowVisibility']
	visibleRef: React.RefObject<ScrollAreaProps['scrollShadowVisibility']>
	element: HTMLElement
	hasBefore: boolean
	hasAfter: boolean
	prefix: string
	suffix: string
	onVisibilityChange: ScrollAreaProps['onScrollShadowVisiblityChange']
}

const setScrollAttributes = (props: SetScrollAttributes) => {
	const {
		visibility,
		visibleRef,
		element,
		hasBefore,
		hasAfter,
		prefix,
		suffix,
		onVisibilityChange,
	} = props

	if (visibility === 'auto') {
		const both = `${prefix}${capitalize(suffix)}Scroll`

		if (hasBefore && hasAfter) {
			element.dataset[both] = 'true'
			element.removeAttribute(`data-${prefix}-scroll`)
			element.removeAttribute(`data-${suffix}-scroll`)
		} else {
			element.dataset[`${prefix}Scroll`] = hasBefore.toString()
			element.dataset[`${suffix}Scroll`] = hasAfter.toString()
			element.removeAttribute(`data-${prefix}-${suffix}-scroll`)
		}
	} else {
		const next = determineScrollVisibility(hasBefore, hasAfter, prefix, suffix)

		if (next !== visibleRef.current) {
			if (onVisibilityChange) onVisibilityChange(next as ScrollAreaProps['scrollShadowVisibility'])

			visibleRef.current = next as ScrollAreaProps['scrollShadowVisibility']
		}
	}
}

export { setScrollAttributes }
