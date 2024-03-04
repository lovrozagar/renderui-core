import { TabsContext } from '@/components/tabs/types/tabs-context'

function handleTriggerPress(value: string, setActiveTab: TabsContext['setActiveTab']) {
  return () => setActiveTab(value)
}

function getHandleTriggerPress(
  type: TabsContext['type'],
  value: string,
  setActiveTab: TabsContext['setActiveTab'],
) {
  return type === 'focus' ? undefined : handleTriggerPress(value, setActiveTab)
}

export { getHandleTriggerPress }
