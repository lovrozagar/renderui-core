'use client'

import { useFreshRef } from '@/components/_shared/hooks/use-fresh-ref'
import React from 'react'

function useIntersectionObserver<T extends HTMLElement>(
	node: T | null,
	callback: IntersectionObserverCallback,
	options: IntersectionObserverInit,
) {
	const freshCallback = useFreshRef(callback)
	const freshOptions = useFreshRef(options)

	/* biome-ignore lint/correctness/useExhaustiveDependencies: using fresh ref pattern, ref dep not needed */
	React.useEffect(() => {
		if (!node) return undefined

		const observer = new IntersectionObserver(freshCallback.current, freshOptions.current)

		observer.observe(node)

		return () => {
			observer.disconnect()
		}
	}, [node])
}

export { useIntersectionObserver }
