import { Simplify } from '@/components/_shared/types/simplify'

import { ButtonProps, ButtonRef } from '@/components/button'

type ToggleGroupItemRef = ButtonRef

type ToggleGroupItemCustomProps = {
  value: string | number
  hasToggledOffRing?: boolean
}

type ToggleGroupItemProps = Simplify<Omit<ButtonProps, 'value'> & ToggleGroupItemCustomProps>

export type { ToggleGroupItemProps, ToggleGroupItemRef }
