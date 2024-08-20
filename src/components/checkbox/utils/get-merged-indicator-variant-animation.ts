import type { CheckboxIndicatorProps } from '@/checkbox'
import { DEFEAULT_MOTION_PROPS } from '@/components/checkbox/constants/constants'

function getMergedIndicatorVariantAnimation(
	variants: CheckboxIndicatorProps['variants'],
	animationDuration: number | undefined,
) {
	if (animationDuration === undefined)
		return {
			...DEFEAULT_MOTION_PROPS,
			...variants,
		}

	return {
		...DEFEAULT_MOTION_PROPS,
		checked: {
			...DEFEAULT_MOTION_PROPS.checked,
			transition: {
				...DEFEAULT_MOTION_PROPS.checked.transition,
				duration: Number.parseFloat((animationDuration / 1000).toFixed(2)),
			},
		},
		...variants,
	}
}

export { getMergedIndicatorVariantAnimation }
