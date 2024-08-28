'use client'

import { ToggleGroup as ToggleGroupPrimitive } from '@radix-ui/react-toggle-group'
import { cn, functionCallOrValue } from '@renderui/utils'

import { EMPTY_ARRAY } from '@/components/_shared/constants/constants'
import { useControllableState } from '@/components/_shared/hooks/use-controllable-state'
import { DEFAULT_TOGGLE_GROUP_CLASSNAME } from '@/components/toggle-group/constants/constants'
import { ToggleGroupProvider } from '@/components/toggle-group/contexts/toggle-group-context'
import type { ToggleGroupProps } from '@/components/toggle-group/types/toggle-group'

const ToggleGroup = (props: ToggleGroupProps) => {
	const {
		onValueChange: onValueChangeProp,
		value: valueProp,
		className,
		children,
		type = 'multiple',
		defaultValue = type === 'multiple' ? (EMPTY_ARRAY as string[]) : '',
		...restProps
	} = props

	/* biome-ignore lint/suspicious/noExplicitAny: generic */
	const [value, onValueChange] = useControllableState<any>({
		onChange: onValueChangeProp,
		defaultProp: defaultValue,
		prop: valueProp,
	})

	return (
		<ToggleGroupPrimitive
			data-slot='group'
			/* biome-ignore lint/suspicious/noExplicitAny: generic */
			value={value as any}
			/* biome-ignore lint/suspicious/noExplicitAny: generic */
			type={type as any}
			onValueChange={onValueChange}
			className={cn(DEFAULT_TOGGLE_GROUP_CLASSNAME, className)}
			{...restProps}
		>
			<ToggleGroupProvider value={{ value }}>
				{functionCallOrValue(children, { value, onValueChange })}
			</ToggleGroupProvider>
		</ToggleGroupPrimitive>
	)
}

export { ToggleGroup }
