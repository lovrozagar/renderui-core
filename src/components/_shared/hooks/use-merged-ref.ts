'use client'

import { isFunction } from '@renderui/utils'
import React from 'react'

function handleRef<T extends Element>(element: T | null, ref: React.Ref<T> | undefined | null) {
	if (!element || !ref) return

	if (isFunction(ref)) {
		ref(element)

		return
	}
	// @TODO change when react 19 released
	// @ts-ignore
	;(ref as React.RefObject<T>).current = element
}

function mergeRefs<T extends Element>(
	element: T | null,
	refs: Array<React.Ref<T> | undefined | null>,
) {
	if (!refs) return

	refs.filter(Boolean).forEach((ref) => {
		handleRef(element, ref)
	})
}

function useMergedRef<T extends Element>(refs: Array<React.Ref<T> | undefined | null>) {
	return React.useCallback(
		(element: T) => {
			mergeRefs(element, refs)
		},
		[refs],
	)
}

export { useMergedRef }
