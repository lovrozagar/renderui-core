import { Simplify } from '@/components/_shared/types/simplify'

import { ButtonProps, ButtonRef } from '@/components/button'
import { ReactNode } from 'react'

type ToggleGroupItemRef = ButtonRef

type ToggleGroupItemCustomProps = {
  value: string | number
  hasToggledOffRing?: boolean
  children: (({ isOn }: { isOn: boolean }) => ReactNode) | ReactNode
}

type ToggleGroupItemProps = Simplify<
  Omit<ButtonProps, 'value' | 'children'> & ToggleGroupItemCustomProps
>

export type { ToggleGroupItemProps, ToggleGroupItemRef }
