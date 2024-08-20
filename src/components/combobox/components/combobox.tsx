'use client'

import { chain } from '@renderui/utils'
import React from 'react'

import { useControllableState } from '@/components/_shared/hooks/use-controllable-state'
import { ComboboxProvider } from '@/components/combobox/contexts/combobox-context'
import { ComboboxProps } from '@/components/combobox/types/combobox'
import { Popover } from '@/components/popover'
import { VisuallyHidden } from '@/components/visually-hidden'

const Combobox = (props: ComboboxProps) => {
	const {
		open: openProp,
		value: valueProp,
		name,
		children,
		inputProps,
		triggerRef,
		isDisabled,
		isInvalid,
		isReadonly,
		isRequired,
		onOpenChange,
		onValueChange,
		defaultValue = '',
		defaultOpen = false,
		hasCheckIcon = true,
		closeTimeout = 50,
		type = 'combobox',
		...restProps
	} = props

	const [open, setOpen] = useControllableState<boolean>({
		defaultProp: defaultOpen,
		prop: openProp,
		onChange: onOpenChange,
	})

	const [value, setValue] = useControllableState<string | number>({
		defaultProp: defaultValue,
		prop: valueProp,
		onChange: onValueChange,
	})

	const [focusValue, setFocusValue] = React.useState<string>('')

	const [label, setLabel] = React.useState<string>('')

	const handleRefocusToActiveItem = () => {
		setFocusValue(label)
	}

	return (
		<Popover open={open} onOpenChange={chain(setOpen, handleRefocusToActiveItem)} {...restProps}>
			<ComboboxProvider
				value={{
					type,
					value,
					label,
					open,
					triggerRef,
					focusValue,
					hasCheckIcon,
					isDisabled,
					isInvalid,
					isReadonly,
					isRequired,
					closeTimeout,
					setOpen,
					setValue,
					setLabel,
					setFocusValue,
				}}
			>
				{children}
			</ComboboxProvider>
			<VisuallyHidden>
				<input
					aria-hidden
					name={name}
					tabIndex={-1}
					value={value}
					/* Sync input value in case change is made externally */
					onChange={(event) => setValue(event.target.value)}
					{...inputProps}
				/>
			</VisuallyHidden>
		</Popover>
	)
}

export { Combobox }
