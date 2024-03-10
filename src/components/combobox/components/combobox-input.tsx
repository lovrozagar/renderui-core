'use client'

import { cn } from '@renderui/utils'
import React from 'react'

import { ComboboxInputProps, ComboboxInputRef } from '@/components/combobox/types/combobox-input'
import { CommandInput } from '@/components/command/components/command-input'
import { COMMAND_INPUT_CLASSNAME } from '@/components/command/constants/constants'

const ComboboxInput = React.forwardRef<ComboboxInputRef, ComboboxInputProps>((props, ref) => {
  const { className, containerProps, iconProps, ...restProps } = props

  return (
    <CommandInput
      ref={ref}
      data-slot='input'
      className={cn(COMMAND_INPUT_CLASSNAME, className)}
      containerProps={containerProps}
      iconProps={iconProps}
      {...restProps}
    />
  )
})

ComboboxInput.displayName = 'ComboboxInput'

export { ComboboxInput }
