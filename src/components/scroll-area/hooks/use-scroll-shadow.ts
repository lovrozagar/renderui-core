import React from 'react'

import {
	SCROLL_SHADOW_OVERFLOW_DIRECTIONS,
	SCROLL_SHADOW_VISIBLITY_DIRECTIONS,
} from '@/components/scroll-area/constants/constants'
import type { ScrollAreaProps } from '@/components/scroll-area/types/scroll-area'
import { setScrollAttributes } from '@/components/scroll-area/utils/set-scroll-attributes'

type ScrollShadowVisibility = ScrollAreaProps['scrollShadowVisibility']

type UseDataScrollOverflowProps = {
	ref?: React.RefObject<HTMLElement>
	overflowCheck?: ScrollAreaProps['orientation']
	visibility?: ScrollShadowVisibility
	isEnabled?: boolean
	offset?: number
	children?: React.ReactNode
	onVisibilityChange?: ScrollAreaProps['onScrollShadowVisiblityChange']
}

function useDataScrollOverflow(props: UseDataScrollOverflowProps) {
	const {
		ref,
		children,
		onVisibilityChange,
		isEnabled = true,
		overflowCheck = 'vertical',
		visibility = 'auto',
		offset = 0,
	} = props

	const visibleRef = React.useRef<ScrollShadowVisibility>(visibility)

	/* biome-ignore lint/correctness/useExhaustiveDependencies: purposeful children dependency */
	React.useEffect(() => {
		const element = ref?.current

		if (!element || !isEnabled) return undefined

		const checkOverflow = () => {
			const directions = [
				{ type: 'vertical', prefix: 'top', suffix: 'bottom' },
				{ type: 'horizontal', prefix: 'left', suffix: 'right' },
			]

			for (const { type, prefix, suffix } of directions) {
				if (overflowCheck === type || overflowCheck === 'both') {
					const hasBefore =
						type === 'vertical' ? element.scrollTop > offset : element.scrollLeft > offset
					const hasAfter =
						type === 'vertical'
							? element.scrollTop + element.clientHeight + offset < element.scrollHeight
							: element.scrollLeft + element.clientWidth + offset < element.scrollWidth

					setScrollAttributes({
						visibility,
						visibleRef,
						element,
						hasBefore,
						hasAfter,
						prefix,
						suffix,
						onVisibilityChange,
					})
				}
			}
		}

		const clearOverflow = () => {
			SCROLL_SHADOW_OVERFLOW_DIRECTIONS.forEach((attribute) => {
				element.removeAttribute(`data-${attribute}-scroll`)
			})
		}

		// auto
		checkOverflow()
		element.addEventListener('scroll', checkOverflow)

		// controlled
		if (visibility !== 'auto') {
			clearOverflow()

			if (visibility === 'both') {
				element.dataset.topBottomScroll = String(overflowCheck === 'vertical')
				element.dataset.leftRightScroll = String(overflowCheck === 'horizontal')
			} else {
				element.dataset.topBottomScroll = 'false'
				element.dataset.leftRightScroll = 'false'
				SCROLL_SHADOW_VISIBLITY_DIRECTIONS.forEach((attribute) => {
					element.dataset[`${attribute}Scroll`] = String(visibility === attribute)
				})
			}
		}

		return () => {
			element.removeEventListener('scroll', checkOverflow)
			clearOverflow()
		}
	}, [ref, offset, children, isEnabled, visibility, overflowCheck, onVisibilityChange])
}

export { useDataScrollOverflow }
