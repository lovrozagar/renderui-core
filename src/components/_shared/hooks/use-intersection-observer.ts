'use client'

import { useFreshRef } from '@/components/_shared/hooks/use-fresh-ref'
import React from 'react'

type UseIntersectionObserverProps<T extends HTMLElement> = {
	node: T | null
	callback: IntersectionObserverCallback
	options: IntersectionObserverInit
}

function useIntersectionObserver<T extends HTMLElement>(props: UseIntersectionObserverProps<T>) {
	const { node, callback, options } = props

	const freshCallback = useFreshRef(callback)
	const freshOptions = useFreshRef(options)

	/* biome-ignore lint/correctness/useExhaustiveDependencies: using fresh ref pattern */
	React.useEffect(() => {
		const element = node

		if (!element) return

		const observer = new IntersectionObserver(freshCallback.current, freshOptions.current)

		if (element) {
			observer.observe(element)
		}

		return () => {
			if (element) {
				observer.unobserve(element)
			}
		}
	}, [node])
}

export { useIntersectionObserver }
