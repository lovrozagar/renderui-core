'use client'

import { cn } from '@renderui/utils'
import { CommandEmpty as CommandEmptyPrimitive } from 'cmdk'
import React from 'react'

import { DEFAULT_COMMAND_EMPTY_CLASSNAME } from '@/components/command/constants/constants'
import { CommandEmptyProps, CommandEmptyRef } from '@/components/command/types/command-empty'

const CommandEmpty = React.forwardRef<CommandEmptyRef, CommandEmptyProps>((props, ref) => {
  const { className, ...restProps } = props

  return (
    <CommandEmptyPrimitive
      ref={ref}
      data-slot='empty'
      className={cn(DEFAULT_COMMAND_EMPTY_CLASSNAME, className)}
      {...restProps}
    />
  )
})

CommandEmpty.displayName = 'CommandEmpty'

export { CommandEmpty }
