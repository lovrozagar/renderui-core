'use client'

import { cn } from '@renderui/utils'
import { CommandItem as CommandItemPrimitive } from 'cmdk'
import React from 'react'

import { DEFAULT_COMMAND_ITEM_CLASSNAME } from '@/components/command/constants/constants'
import { CommandItemProps, CommandItemRef } from '@/components/command/types/command-item'

const CommandItem = React.forwardRef<CommandItemRef, CommandItemProps>((props, ref) => {
  const { className, ...restProps } = props

  return (
    <CommandItemPrimitive
      ref={ref}
      data-slot='item'
      className={cn(DEFAULT_COMMAND_ITEM_CLASSNAME, className)}
      {...restProps}
    />
  )
})

CommandItem.displayName = 'CommandItem'

export { CommandItem }
