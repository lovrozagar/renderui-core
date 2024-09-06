'use client'

import { useFreshRef } from '@/components/_shared/hooks/use-fresh-ref'
import React from 'react'

type UseMutationObserverProps<T extends HTMLElement> = {
	node: T | null
	callback: MutationCallback
	options: MutationObserverInit
}

function useMutationObserver<T extends HTMLElement>(props: UseMutationObserverProps<T>) {
	const freshProps = useFreshRef(props)

	const node = freshProps.current.node

	/* biome-ignore lint/correctness/useExhaustiveDependencies: using fresh ref pattern, ref dep not needed */
	React.useEffect(() => {
		if (!node) return undefined

		const observer = new MutationObserver(freshProps.current.callback)

		observer.observe(node, freshProps.current.options)

		return () => {
			observer.disconnect()
		}
	}, [node])
}

export { useMutationObserver }
