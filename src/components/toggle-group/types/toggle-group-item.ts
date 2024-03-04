import { Simplify } from '@renderui/types'

import { ButtonProps, ButtonRef } from '@/components/button'

type ToggleGroupItemRef = ButtonRef

type ToggleGroupItemControlProps = {
  value: string
}

type ToggleGroupItemProps = Simplify<Omit<ButtonProps, 'value'> & ToggleGroupItemControlProps>

export type { ToggleGroupItemProps, ToggleGroupItemRef }
