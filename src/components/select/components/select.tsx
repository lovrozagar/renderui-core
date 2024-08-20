import React from 'react'

import { Combobox, type ComboboxProps } from '@/components/combobox'

const Select = (props: ComboboxProps) => {
	const { type = 'select', ...restProps } = props

	return <Combobox type={type} {...restProps} />
}

Select.displayName = 'Select'

export { Select }
