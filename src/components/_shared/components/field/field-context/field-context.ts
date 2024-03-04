import { initializeContext } from '@renderui/utils'
import React from 'react'

const [FieldProvider, useFieldContext] = initializeContext<{
  id: string
  error: React.ReactNode
}>({
  errorMessage:
    'Components using useField must be wrapped in their a <{InputName}Field /> component.',
  providerName: 'ToggleGroupProvider',
  hookName: 'useField',
  name: 'fieldContext',
  strict: false,
})

export { FieldProvider, useFieldContext }
