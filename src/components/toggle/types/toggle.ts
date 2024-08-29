import type { Simplify } from '@/components/_shared/types/simplify'
import type { ButtonProps } from '@/components/button/types/button'

type TogglePrimitiveProps = Omit<ButtonProps, 'children'>

type ToggleCustomProps = {
	isOn?: boolean
	defaultIsOn?: boolean
	onIsOnChange?: (isOn: boolean | undefined) => void
	children?: React.ReactNode | (({ isOn }: { isOn: boolean }) => React.ReactNode)
}

type ToggleProps = Simplify<TogglePrimitiveProps & ToggleCustomProps>

export type { ToggleProps }
