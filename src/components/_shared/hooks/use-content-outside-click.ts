'use client'

import { useEventListener } from '@/components/_shared/hooks/use-event-listener'
import type React from 'react'

type UseContentOutsideClickProps = {
	enabled: boolean
	contentRef: React.RefObject<HTMLDivElement | null>
	shouldForwardOutsideInteraction: boolean
	setOpen: ((value: React.SetStateAction<boolean>) => void) | undefined
	onPointerDownOutside: ((event: PointerEvent) => void) | undefined
}

function useContentOutsideClick(props: UseContentOutsideClickProps) {
	const { enabled, contentRef, shouldForwardOutsideInteraction, setOpen, onPointerDownOutside } =
		props

	useEventListener({
		event: 'pointerdown',
		enabled,
		handler: (event) => {
			if (!(event.target instanceof Node)) {
				return
			}

			if (contentRef.current?.contains(event.target)) {
				return
			}

			if (setOpen) {
				setOpen(false)
			}

			onPointerDownOutside?.(event)

			if (shouldForwardOutsideInteraction && event.target instanceof HTMLElement) {
				event.target.click()
			}
		},
	})
}

export { useContentOutsideClick }
