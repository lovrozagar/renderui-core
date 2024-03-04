import { initializeContext } from '@renderui/utils'

import { ComboboxContext } from '@/components/combobox/types/combobox-context'

const [ComboboxProvider, useComboboxContext] = initializeContext<ComboboxContext>({
  errorMessage: 'Components using combobox context must be wrapped in a <Combobox />.',
  providerName: 'ComboboxProvider',
  hookName: 'useComboboxContext',
  name: 'ComboboxContext',
})

export { ComboboxProvider, useComboboxContext }
