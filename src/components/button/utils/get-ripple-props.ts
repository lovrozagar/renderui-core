import { cx, getOptionalObject } from '@renderui/utils'

import { RippleProps, RippleRef } from '@/components/ripple'

// @TODO understand type problem and fix it, remove any's
type GetRipplePropsArgs = {
	rippleRef: React.Ref<RippleRef> | undefined
	rippleProps: RippleProps | undefined
	isLoading: boolean | undefined
}

const getRippleProps = (args: any): any => {
	const { rippleRef, rippleProps, isLoading } = args

	const {
		color: colorProp,
		className,
		isDisabled: isDisabledProp,
		...restRippleProps
	} = getOptionalObject(rippleProps)

	const isDisabled = isLoading ?? isDisabledProp

	return {
		'ref': rippleRef,
		'data-slot': 'ripple',
		'className': cx(isLoading ? '!text-[rgba(var(--button-color))]' : undefined, className),
		isDisabled,
		...restRippleProps,
	}
}

export { getRippleProps }
