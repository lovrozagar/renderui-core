import { DEFAULT_TABS_CURSOR_TRANISTION } from '@/components/tabs/constants/constants'
import type { TabsProps } from '@/components/tabs/types/tabs'
import type { TabsCursorProps } from '@/components/tabs/types/tabs-cursor'

function getMergedCursorTransition(
	transition: TabsCursorProps['transition'],
	animationDuration: TabsProps['animationDuration'],
) {
	return {
		...DEFAULT_TABS_CURSOR_TRANISTION,
		...(animationDuration
			? { duration: Number.parseFloat((animationDuration / 1000).toFixed(2)) }
			: {}),
		...transition,
	}
}

export { getMergedCursorTransition }
