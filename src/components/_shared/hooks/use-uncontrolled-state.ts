'use client'

import React from 'react'

import { useFreshRef } from '@/components/_shared/hooks/use-fresh-ref'

type UseControllableStateProps<T> = {
	prop?: T | undefined
	defaultProp?: T | undefined
	onChange: ((state: T) => void) | undefined
}

function useUncontrolledState<T>({
	defaultProp,
	onChange,
}: Omit<UseControllableStateProps<T>, 'prop'>) {
	const [value, setValue] = React.useState<T | undefined>(defaultProp)
	const previousValueRef = React.useRef(value)
	const handleChange = useFreshRef(onChange)

	React.useEffect(() => {
		if (previousValueRef.current !== value) {
			handleChange.current?.(value as T)
			previousValueRef.current = value
		}
	}, [value, handleChange])

	return [value, setValue]
}

export { useUncontrolledState }

export type { UseControllableStateProps }
