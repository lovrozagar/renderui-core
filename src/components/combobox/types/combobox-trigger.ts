import { Simplify } from '@renderui/types'

import { CaretSortIcon } from '@/components/_shared/components/icons/caret-sort-icon'
import { ButtonProps, ButtonRef } from '@/components/button'

type ComboboxTriggerRef = ButtonRef

type ComboboxTriggerButtonProps = Omit<ButtonProps, 'children' | 'variant' | 'size'>

type ComboboxTriggerCustomProps = {
  variant?: 'solid' | 'outline'
  placeholder?: string
  hasTruncatedText?: boolean
  hasIndicator?: boolean
  children?: React.ReactNode
  iconProps?: React.ComponentPropsWithoutRef<typeof CaretSortIcon>
}

type ComboboxTriggerProps = Simplify<ComboboxTriggerButtonProps & ComboboxTriggerCustomProps>

export type { ComboboxTriggerProps, ComboboxTriggerRef }
