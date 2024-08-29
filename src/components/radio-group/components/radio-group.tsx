'use client'

import { cx, functionCallOrValue } from '@renderui/utils'

import { useControllableState } from '@/components/_shared/hooks/use-controllable-state'
import { DEFAULT_RADIO_GROUP_CLASSNAME } from '@/components/radio-group/constants/constants'
import { RadioGroupProvider } from '@/components/radio-group/contexts/radio-group-context'
import type { RadioGroupProps } from '@/components/radio-group/types/radio-group'
import { ToggleGroup } from '@/components/toggle-group/components/toggle-group'

const RadioGroup = (props: RadioGroupProps) => {
	const {
		className,
		startContent,
		children,
		endContent,
		value: valueProp,
		name,
		isDisabled,
		isReadOnly,
		isInvalid,
		isRequired,
		onValueChange,
		defaultValue = '',
		role = 'radiogroup',
		...restProps
	} = props

	const [value, setValue] = useControllableState<string | number>({
		prop: valueProp,
		defaultProp: defaultValue,
		onChange: onValueChange,
	})

	return (
		<ToggleGroup
			role={role}
			aria-disabled={isDisabled}
			aria-readonly={isReadOnly}
			aria-invalid={isInvalid}
			aria-required={isRequired}
			data-disabled={isDisabled}
			data-readonly={isReadOnly}
			data-invalid={isInvalid}
			data-required={isRequired}
			data-slot='base'
			className={cx(DEFAULT_RADIO_GROUP_CLASSNAME, className)}
			{...restProps}
			/* enforce single type */
			type='single'
		>
			<RadioGroupProvider value={{ name, isInvalid, value, setValue }}>
				{functionCallOrValue(startContent, value)}
				{functionCallOrValue(children, value)}
				{functionCallOrValue(endContent, value)}
			</RadioGroupProvider>
		</ToggleGroup>
	)
}

export { RadioGroup }
