import { DEFAULT_TABS_CURSOR_TRANISTION } from '@/components/tabs/constants/constants'
import { TabsCursorProps } from '@/components/tabs/types/tabs-cursor'
import { TabsProps } from '@/components/tabs/types/tabs'

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
