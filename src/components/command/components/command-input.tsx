'use client'

import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { useControllableState } from '@renderui/hooks'
import { cn, getOptionalObject, polymorphic } from '@renderui/utils'
import { CommandInput as CommandInputPrimitive } from 'cmdk'
import React from 'react'

import {
  COMMAND_INPUT_CLASSNAME,
  COMMAND_INPUT_CONTAINER_CLASSNAME,
  COMMAND_INPUT_ICON_CLASSNAME,
} from '@/components/command/constants/constants'
import { useSearch } from '@/components/command/hooks/use-search'
import { CommandInputProps, CommandInputRef } from '@/components/command/types/command-input'

const CommandInput = React.forwardRef<CommandInputRef, CommandInputProps>((props, ref) => {
  const {
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
          ref={ref}
          data-slot='input'
          value={value}
          onChange={(event) => handleValueChangeWithSearch(event.target.value)}
          className={cn(COMMAND_INPUT_CLASSNAME, className)}
          {...restProps}
        />
      ) : (
        <CommandInputPrimitive
          ref={ref}
          data-slot='input'
          className={cn(COMMAND_INPUT_CLASSNAME, className)}
          {...restProps}
        />
      )}
    </InputContainerComponent>
  )
})

CommandInput.displayName = 'CommandInput'

export { CommandInput }
