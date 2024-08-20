/* eslint-disable react/hook-use-state */
import React from 'react'

import { ButtonProps } from '@/components/button/types/button'
import { Loader } from '@/components/loader'
import { Ripple } from '@/components/ripple'

type UseLazyComponentsProps = Pick<
	ButtonProps,
	'isLoading' | 'hasLoaderOnLoading' | 'loader' | 'hasRipple'
>

function useLazyComponents(props: UseLazyComponentsProps) {
	const { isLoading, hasLoaderOnLoading, loader, hasRipple } = props

	const [LoaderComponent, setLoaderComponent] = React.useState<typeof Loader | null>(null)
	const [RippleComponent, setRippleComponent] = React.useState<typeof Ripple | null>(null)

	React.useEffect(() => {
		const loadComponents = async () => {
			if (isLoading && hasLoaderOnLoading && !loader) {
				const { Loader } = await import('@/components/loader')

				setLoaderComponent(Loader)
			}

			if (hasRipple) {
				const { Ripple } = await import('@/components/ripple')

				setRippleComponent(Ripple)
			}
		}

		loadComponents()
	}, [isLoading, loader, hasLoaderOnLoading, hasRipple])

	return { LoaderComponent, RippleComponent }
}

export { useLazyComponents }
