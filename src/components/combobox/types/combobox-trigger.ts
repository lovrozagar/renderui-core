import { CaretSortIcon } from '@radix-ui/react-icons'
import { Simplify } from '@renderui/types'

import { ButtonProps, ButtonRef } from '@/components/button'

type ComboboxTriggerRef = ButtonRef

type ComboboxTriggerButtonProps = Omit<ButtonProps, 'children'>

type ComboboxTriggerCustomProps = {
  placeholder?: string
  hasTruncatedText?: boolean
  children?: React.ReactNode
  iconProps?: React.ComponentPropsWithoutRef<typeof CaretSortIcon>
}

type ComboboxTriggerProps = Simplify<ComboboxTriggerButtonProps & ComboboxTriggerCustomProps>

export type { ComboboxTriggerProps, ComboboxTriggerRef }
