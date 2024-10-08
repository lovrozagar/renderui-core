import type { Color } from '@/components/_shared/types/color'
import type { Simplify } from '@/components/_shared/types/simplify'
import type { ButtonProps } from '@/components/button/types/button'
import type { PopoverProps } from '@/components/popover/types/popover'

type ComboboxPopoverProps = Omit<PopoverProps, 'color'>

type ComboboxCustomProps = {
	type?: 'select' | 'combobox'
	color?: Color
	name?: string
	value?: string | number
	defaultValue?: string
	inputProps?: React.ComponentPropsWithRef<'input'>
	triggerRef?: ButtonProps['ref']
	hasCheckIcon?: boolean
	isDisabled?: boolean | undefined
	isInvalid?: boolean | undefined
	isReadonly?: boolean | undefined
	isRequired?: boolean | undefined
	closeTimeout?: number | undefined
	onValueChange?: React.Dispatch<React.SetStateAction<string | number | undefined>>
}

type ComboboxProps = Simplify<ComboboxPopoverProps & ComboboxCustomProps>

export type { ComboboxProps }
