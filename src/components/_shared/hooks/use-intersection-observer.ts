'use client'

import { useFreshRef } from '@/components/_shared/hooks/use-fresh-ref'
import React from 'react'

type UseIntersectionObserverProps<T extends HTMLElement> = {
	node: T | null
	callback: IntersectionObserverCallback
	options: IntersectionObserverInit
}

function useIntersectionObserver<T extends HTMLElement>(props: UseIntersectionObserverProps<T>) {
	const freshProps = useFreshRef(props)

	const node = freshProps.current.node

	/* biome-ignore lint/correctness/useExhaustiveDependencies: using fresh ref pattern, ref dep not needed */
	React.useEffect(() => {
		if (!node) return undefined

		const observer = new IntersectionObserver(
			freshProps.current.callback,
			freshProps.current.options,
		)

		observer.observe(node)

		return () => {
			observer.disconnect()
		}
	}, [node])
}

export { useIntersectionObserver }
