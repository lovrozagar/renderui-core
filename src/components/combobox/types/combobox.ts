import { Simplify } from '@renderui/types'

import { ButtonRef } from '@/components/button'
import { PopoverProps } from '@/components/popover'

type ComboboxPopoverProps = PopoverProps

type ComboboxCustomProps = {
  type?: 'select' | 'combobox'
  name?: string
  value?: string | number
  defaultValue?: string
  inputProps?: React.ComponentPropsWithoutRef<'input'>
  triggerRef?: React.RefObject<ButtonRef>
  hasCheckIcon?: boolean
  isDisabled?: boolean | undefined
  isInvalid?: boolean | undefined
  isReadonly?: boolean | undefined
  isRequired?: boolean | undefined
  onValueChange?: React.Dispatch<React.SetStateAction<string | number | undefined>>
}

type ComboboxProps = Simplify<ComboboxPopoverProps & ComboboxCustomProps>

export type { ComboboxProps }
