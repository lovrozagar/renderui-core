import type { TabsContext } from '@/components/tabs/types/tabs-context'

function handleTriggerPress(value: string | number, setActiveTab: TabsContext['setActiveTab']) {
	return () => setActiveTab(value)
}

function getHandleTriggerPress(
	type: TabsContext['type'],
	value: string | number,
	setActiveTab: TabsContext['setActiveTab'],
) {
	return type === 'focus' ? undefined : handleTriggerPress(value, setActiveTab)
}

export { getHandleTriggerPress }
