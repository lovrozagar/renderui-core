import { chain, cn } from '@renderui/utils'
import React from 'react'

import { useAriaHandlers } from '@/components/_shared/hooks/use-aria-handlers'
import { useMergedRef } from '@/components/_shared/hooks/use-merged-ref'
import { splitAriaProps } from '@/components/_shared/utils/split-aria-props'
import { buttonClasses } from '@/components/button/classes/button-classes'
import type { ButtonProps } from '@/components/button/types/button'
import { getColorVariables } from '@/components/button/utils/get-color-variables'
import { getLoaderProps } from '@/components/button/utils/get-loader-props'
import { getRippleProps } from '@/components/button/utils/get-ripple-props'

function useButton(props: ButtonProps) {
	const { ariaProps, nonAriaProps } = splitAriaProps(props)
	const {
		ref,
		asChild,
		className,
		style,
		isDisabled,
		isLoading,
		startContent,
		endContent,
		loadingContent,
		loaderProps,
		subLayerProps,
		rippleProps,
		loader,
		type = 'button',
		size = 'md',
		variant = 'solid',
		color = 'primary',
		loaderPosition = 'end',
		hasLoaderOnLoading = true,
		hasRipple = true,
		hasDefaultHoverStyles = true,
		hasDefaultFocusVisibleStyles = true,
		hasDefaultPressedStyles = true,
		hasRingOnAnyFocus = false,
		hasLowerOpacityOnLoading = true,
		hasContentOnLoading = true,
		onClick,
		...restProps
	} = nonAriaProps

	const internalRef = React.useRef<HTMLButtonElement>(null)
	const mergedRefs = useMergedRef<HTMLButtonElement>([internalRef, ref])

	const isPressDisabled = isDisabled || ariaProps?.isPressDisabled || isLoading
	const isHoverDisabled = isDisabled || ariaProps?.isHoverDisabled || isLoading

	const { ariaComponentProps, ariaFlags } = useAriaHandlers(
		{
			...ariaProps,
			onPress: chain(ariaProps.onPress, onClick),
			isPressDisabled,
			isHoverDisabled,
		},
		internalRef,
	)
	const { isPressed, isKeyboardPressed } = ariaFlags

	const mergedLoaderProps = getLoaderProps({
		loaderProps,
		isLoading,
	})

	const hasContent = () => {
		if (mergedLoaderProps.position === 'absolute-center') return false

		return hasContentOnLoading
	}

	const memoizedStyleWithColorVariable = React.useMemo(
		() => ({
			...style,
			...getColorVariables(color),
		}),
		[style, color],
	)

	return {
		buttonProps: {
			type,
			ref: mergedRefs,
			disabled: isDisabled,
			className: cn(
				buttonClasses({
					size,
					variant,
					hasRingOnAnyFocus,
					hasDefaultFocusVisibleStyles,
					hasDefaultPressedStyles,
					hasDefaultHoverStyles,
					hasLowerOpacityOnLoading,
					hasLoaderOnLoading,
					hasContentOnLoading: hasContent(),
				}),
				className,
			),
			style: memoizedStyleWithColorVariable,
			'aria-label': isLoading ? 'loading' : undefined,
			'aria-busy': isLoading || undefined,
			'data-variant': variant,
			'data-color': color,
			'data-loading': isLoading || undefined,
			'data-disabled': isDisabled,
			'data-slot': 'base',
			...ariaComponentProps,
			...restProps,
		},
		subLayerProps,
		rippleProps: getRippleProps({ rippleProps, isLoading }),
		loaderProps: mergedLoaderProps,
		utility: {
			asChild,
			isPressed,
			isKeyboardPressed,
			isLoading,
			startContent,
			endContent,
			loadingContent,
			loader,
			loaderPosition,
			hasRipple,
			hasLoaderOnLoading,
		},
	}
}

export { useButton }
