import { RefCallback } from 'react'

import { ButtonRef } from '@/components/button'
import { ComboboxProps } from '@/components/combobox/types/combobox'

type ComboboxContext = {
  type: NonNullable<ComboboxProps['type']>
  open: ComboboxProps['open']
  value: ComboboxProps['value']
  focusValue: ComboboxProps['value']
  label: React.ReactNode
  triggerRef: React.RefObject<ButtonRef> | RefCallback<ButtonRef> | undefined
  hasCheckIcon: boolean
  isDisabled: boolean | undefined
  isInvalid: boolean | undefined
  isReadonly: boolean | undefined
  isRequired: boolean | undefined
  closeTimeout: number
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setValue: React.Dispatch<React.SetStateAction<string | number>>
  setFocusValue: React.Dispatch<React.SetStateAction<string>>
  setLabel: React.Dispatch<React.SetStateAction<string>>
}

export type { ComboboxContext }
