'use client'

import { CollapsibleProps, CollapsibleRef } from '@/components/collapsible/types/collapsible'
import { Collapsible as CollapsiblePrimitive } from '@radix-ui/react-collapsible'
import { cn } from '@renderui/utils'
import React from 'react'

const Collapsible = React.forwardRef<CollapsibleRef, CollapsibleProps>((props, ref) => {
  const { className, ...restProps } = props

  return (
    <CollapsiblePrimitive
      data-slot='base'
      className={cn('render-ui-collapsible', className)}
      {...restProps}
    />
  )
})

Collapsible.displayName = 'Collapsible'

export { Collapsible }
