'use client'

import React from 'react'

import { useButton } from '@/components/button/hooks/use-button'
import type { ButtonProps } from '@/components/button/types/button'
import { functionCallOrValue, polymorphic } from '@renderui/utils'

const Loader = React.lazy(() =>
	import('@/components/loader/components/loader').then((module) => ({
		default: module.Loader,
	})),
)

const Ripple = React.lazy(() =>
	import('@/components/ripple/components/ripple').then((module) => ({
		default: module.Ripple,
	})),
)

const Button = (props: ButtonProps) => {
	const { buttonProps, subLayerProps, rippleProps, loaderProps, utility } = useButton(props)

	const { children } = buttonProps
	const {
		asChild,
		isPressed,
		isKeyboardPressed,
		isLoading,
		loader,
		loaderPosition,
		hasLoaderOnLoading,
		startContent,
		endContent,
		loadingContent,
		hasRipple,
	} = utility

	const Component = polymorphic(asChild, 'button')

	const getChildren = () => {
		return isLoading && loadingContent
			? functionCallOrValue(loadingContent, {
					isPressed,
					isKeyboardPressed,
					Loader: Loader,
					Ripple: Ripple,
				})
			: functionCallOrValue(children, {
					isPressed,
					isKeyboardPressed,
					Loader: Loader,
					Ripple: Ripple,
				})
	}

	const getContent = () => {
		if (asChild) return getChildren()

		return (
			<>
				{functionCallOrValue(startContent, { isPressed, isKeyboardPressed })}
				{isLoading && hasLoaderOnLoading && loaderPosition === 'start'
					? loader ?? <Loader {...loaderProps} data-slot='loader' />
					: null}
				{getChildren()}
				{isLoading && hasLoaderOnLoading && loaderPosition === 'end'
					? loader ?? <Loader {...loaderProps} data-slot='loader' />
					: null}
				{functionCallOrValue(endContent, { isPressed, isKeyboardPressed })}
				{hasRipple ? (
					<Ripple
						data-slot='ripple'
						subLayerProps={{ ...subLayerProps, 'data-slot': 'sub-layer' }}
						{...rippleProps}
					/>
				) : null}
			</>
		)
	}

	return <Component {...buttonProps}>{getContent()}</Component>
}

export { Button }
