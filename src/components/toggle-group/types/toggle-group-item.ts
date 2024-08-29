import type { Simplify } from '@/components/_shared/types/simplify'
import type { ButtonProps } from '@/components/button/types/button'

import type React from 'react'

type ToggleGroupItemCustomProps = {
	value: string | number
	hasToggledOffRing?: boolean
	children: (({ isOn }: { isOn: boolean }) => React.ReactNode) | React.ReactNode
}

type ToggleGroupItemProps = Simplify<
	Omit<ButtonProps, 'value' | 'children'> & ToggleGroupItemCustomProps
>

export type { ToggleGroupItemProps }
