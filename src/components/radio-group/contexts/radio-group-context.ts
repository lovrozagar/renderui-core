import { initializeContext } from '@renderui/utils'

import { RadioGroupContext } from '@/components/radio-group/types/radio-group-context'

const [RadioGroupProvider, useRadioGroupContext] = initializeContext<RadioGroupContext>({
	errorMessage: 'Components using RadioGroup context must be wrapped in a <RadioGroup />.',
	providerName: 'RadioGroupProvider',
	hookName: 'useRadioGroupContext',
	name: 'RadioGroupContext',
})

export { RadioGroupProvider, useRadioGroupContext }
