'use client'

import React from 'react'

import { defaultFilter } from '@/components/command/utils/default-filter'

type GetFilterWithFocusOnExactMatchArgs = {
	timeoutIdRef: React.RefObject<NodeJS.Timeout | null>
	dataValueMapRef: React.RefObject<Map<string, string>>
	dataValueArrayRef: React.RefObject<string[]>
	onValueChange: ((value: string) => void) | undefined
	filter: ((value: string, search: string) => number) | undefined
}

function getFilterWithFocusOnExactMatch(args: GetFilterWithFocusOnExactMatchArgs) {
	const { timeoutIdRef, dataValueMapRef, dataValueArrayRef, onValueChange, filter } = args

	return (filterValue: string, filterSearch: string) => {
		timeoutIdRef.current = setTimeout(() => {
			if (dataValueMapRef.current.has(filterSearch)) {
				onValueChange?.(filterSearch)
			}
		}, 0)

		if (filterSearch !== '') {
			const startingLabelElement = dataValueArrayRef.current.find((value) =>
				value.toLowerCase().startsWith(filterSearch.toLowerCase()),
			)

			if (startingLabelElement) onValueChange?.(startingLabelElement)
		}

		const isMatch =
			filter?.(filterValue, filterSearch) || defaultFilter?.(filterValue, filterSearch)

		if (isMatch) return 1

		return 0
	}
}

export { getFilterWithFocusOnExactMatch }
