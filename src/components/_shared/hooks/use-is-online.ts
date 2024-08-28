'use client'

import { useSyncExternalStore } from 'react'

function getClientSnapshot() {
	return navigator.onLine
}

function getServerSnapshot() {
	return true
}

function subscribe(callback: () => void) {
	window.addEventListener('online', callback)
	window.addEventListener('offline', callback)
	return () => {
		window.removeEventListener('online', callback)
		window.removeEventListener('offline', callback)
	}
}

function useIsOnline() {
	const isOnline = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot)

	return isOnline
}

export { useIsOnline }
