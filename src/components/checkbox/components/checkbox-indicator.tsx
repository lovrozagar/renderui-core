import { cn, getOptionalObject } from '@renderui/utils'
import { m } from 'framer-motion'

import { DEFAULT_CHECKBOX_INDICATOR_CLASSNAME } from '@/components/checkbox/constants/constants'
import type { CheckboxIndicatorProps } from '@/components/checkbox/types/checkbox-indicator'
import { getMergedIndicatorVariantAnimation } from '@/components/checkbox/utils/get-merged-indicator-variant-animation'
import { LazyMotionDomAnimationProvider } from '@/providers/lazy-motion-dom-animation-provider/lazy-motion-dom-animation'

const CheckboxIndicator = (props: CheckboxIndicatorProps) => {
	const {
		isChecked,
		hasIconContentWhenUnchecked,
		className,
		pathProps,
		animate,
		animationDuration,
		initial = false,
		fill = 'none',
		viewBox = '0 0 24 24',
		...restProps
	} = props

	const {
		strokeLinecap = 'round',
		strokeLinejoin = 'round',
		d: dProp = 'M4.5 12.75l6 6 9-13.5',
		variants,
		...restPathprops
	} = getOptionalObject(pathProps)

	return (
		<LazyMotionDomAnimationProvider>
			<m.svg
				fill={fill}
				viewBox={viewBox}
				initial={initial}
				data-slot='indicator'
				animate={animate ?? isChecked ? 'checked' : 'unchecked'}
				className={cn(
					DEFAULT_CHECKBOX_INDICATOR_CLASSNAME,
					hasIconContentWhenUnchecked || isChecked ? undefined : 'hidden',
					className,
				)}
				{...restProps}
			>
				<m.path
					data-slot='indicator-path'
					strokeLinecap={strokeLinecap}
					strokeLinejoin={strokeLinejoin}
					d={dProp}
					variants={getMergedIndicatorVariantAnimation(variants, animationDuration)}
					{...restPathprops}
				/>
			</m.svg>
		</LazyMotionDomAnimationProvider>
	)
}

export { CheckboxIndicator }
