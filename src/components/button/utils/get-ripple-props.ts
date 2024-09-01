import type { RippleProps } from '@/components/ripple/types/ripple'
import { getOptionalObject } from '@renderui/utils'

type GetRipplePropsArgs = {
	rippleProps: RippleProps | undefined
	isLoading: boolean | undefined
}

/* biome-ignore lint/suspicious/noExplicitAny: avoid external module reference error: */
const getRippleProps = (props: GetRipplePropsArgs): any => {
	const { rippleProps, isLoading } = props

	const { ref, isDisabled: isDisabledProp, ...restRippleProps } = getOptionalObject(rippleProps)

	const isDisabled = isLoading ?? isDisabledProp

	return {
		'ref': ref,
		'data-slot': 'ripple',
		'className': isLoading ? '!text-[rgba(var(--button-color))]' : undefined,
		'data-disabled': isDisabled,
		...restRippleProps,
	}
}

export { getRippleProps }
