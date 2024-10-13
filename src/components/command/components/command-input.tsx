'use client'

import { cn, getOptionalObject, polymorphic } from '@renderui/utils'
import { CommandInput as CommandInputPrimitive } from 'cmdk'

import { MagnifyingGlassIcon } from '@/components/_shared/components/icons/magnifying-glass-icon'
import { useControllableState } from '@/components/_shared/hooks/use-controllable-state'
import {
	COMMAND_INPUT_CLASSNAME,
	COMMAND_INPUT_CONTAINER_CLASSNAME,
	COMMAND_INPUT_ICON_CLASSNAME,
} from '@/components/command/constants/constants'
import { useSearch } from '@/components/command/hooks/use-search'
import type { CommandInputProps } from '@/components/command/types/command-input'
import { useCommandDialogContext } from '@/components/command/contexts/command-dialog-context'
import { useMergedRef } from '@/components/_shared/hooks/use-merged-ref'

const CommandInput = (props: CommandInputProps) => {
	const {
		ref,
		asChild,
		className,
		containerProps,
		iconProps,
		onValueChange,
		value: valueProp,
		defaultValue = '',
		...restProps
	} = props

	const {
		asChild: inputContainerAsChild,
		className: inputContainerClassName,
		...restInputContainerProps
	} = getOptionalObject(containerProps)

	const { className: iconClassName, ...restIconProps } = getOptionalObject(iconProps)

	const [value, setValue] = useControllableState<string>({
		prop: valueProp,
		defaultProp: defaultValue as string,
		onChange: onValueChange,
	})

	const { type, handleValueChangeWithSearch } = useSearch(value, setValue)

	const { isDialog, inputRef } = useCommandDialogContext() ?? {}

	const mergedRefCallback = useMergedRef([inputRef, ref])

	const InputContainerComponent = polymorphic(inputContainerAsChild, 'div')

	const InputComponent = polymorphic(asChild, 'input')

	return (
		<InputContainerComponent
			cmdk-input-wrapper=''
			data-slot='input-container'
			className={cn(COMMAND_INPUT_CONTAINER_CLASSNAME, inputContainerClassName)}
			{...restInputContainerProps}
		>
			<MagnifyingGlassIcon
				data-slot='input-icon'
				className={cn(COMMAND_INPUT_ICON_CLASSNAME, iconClassName)}
				{...restIconProps}
			/>
			{type === 'select' ? (
				<InputComponent
					data-slot='input'
					ref={inputRef}
					value={value}
					onChange={(event) => handleValueChangeWithSearch(event.target.value)}
					className={cn(COMMAND_INPUT_CLASSNAME, isDialog ? 'pr-8' : undefined, className)}
					{...restProps}
				/>
			) : (
				<CommandInputPrimitive
					data-slot='input'
					ref={inputRef}
					className={cn(COMMAND_INPUT_CLASSNAME, isDialog ? 'pr-8' : undefined, className)}
					{...restProps}
				/>
			)}
		</InputContainerComponent>
	)
}

CommandInput.displayName = 'CommandInput'

export { CommandInput }
