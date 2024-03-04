import { cn } from '@renderui/utils'
import { CommandList as CommandListPrimitive } from 'cmdk'
import React from 'react'

import { DEFAULT_COMMAND_LIST_CLASSNAME } from '@/components/command/constants/constants'
import { CommandListProps, CommandListRef } from '@/components/command/types/command-list'

const CommandList = React.forwardRef<CommandListRef, CommandListProps>((props, ref) => {
  const { className, ...restProps } = props

  return (
    <CommandListPrimitive
      ref={ref}
      data-slot='list'
      className={cn(DEFAULT_COMMAND_LIST_CLASSNAME, className)}
      {...restProps}
    />
  )
})

CommandList.displayName = 'CommandList'

export { CommandList }
