import React from 'react'

import { DEFAULT_COMMAND_CLASSNAME } from '@/packages/components/command/constants/constants'
import { CommandProps, CommandRef } from '@/packages/components/command/types/command'
import { defaultFilter } from '@/packages/components/command/utils/default-filter'
import { cn } from '@/packages/utils/cn'

function useCommand(props: CommandProps, ref: React.ForwardedRef<CommandRef>) {
  const { className, onValueChange, filter, ...restProps } = props

  return {
    ref,
    className: cn(DEFAULT_COMMAND_CLASSNAME, className),
    onValueChange,
    filter: filter ?? defaultFilter,
    ...restProps,
  }
}

export { useCommand }
