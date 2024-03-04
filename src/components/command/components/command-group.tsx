import { cn } from '@renderui/utils'
import { CommandGroup as CommandGroupPrimitive } from 'cmdk'
import React from 'react'

import { DEFAULT_COMMAND_GROUP_CLASSNAME } from '@/components/command/constants/constants'
import { CommandGroupProps, CommandGroupRef } from '@/components/command/types/command-group'

const CommandGroup = React.forwardRef<CommandGroupRef, CommandGroupProps>((props, ref) => {
  const { className, ...restProps } = props

  return (
    <CommandGroupPrimitive
      ref={ref}
      data-slot='group'
      className={cn(DEFAULT_COMMAND_GROUP_CLASSNAME, className)}
      {...restProps}
    />
  )
})

CommandGroup.displayName = 'CommandGroup'

export { CommandGroup }
