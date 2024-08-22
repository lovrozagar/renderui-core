import type { Simplify } from '@/components/_shared/types/simplify'
import type { ButtonProps } from '@/components/button'

import type { PopoverProps } from '@/components/popover'

type ComboboxPopoverProps = PopoverProps

type ComboboxCustomProps = {
	type?: 'select' | 'combobox'
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
