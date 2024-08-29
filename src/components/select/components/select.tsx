import { Combobox } from '@/components/combobox/components/combobox'
import type { ComboboxProps } from '@/components/combobox/types/combobox'

const Select = (props: ComboboxProps) => {
	const { type = 'select', ...restProps } = props

	return <Combobox type={type} {...restProps} />
}

Select.displayName = 'Select'

export { Select }
