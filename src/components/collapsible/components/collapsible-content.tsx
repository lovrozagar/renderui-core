import { CollapsibleContent as CollapsibleContentPrimitive } from '@radix-ui/react-collapsible'
import { cn } from '@renderui/utils'
import React from 'react'

import {
  CollapsibleContentProps,
  CollapsibleContentRef,
} from '@/components/collapsible/types/collapsible-content'

const CollapsibleContent = React.forwardRef<CollapsibleContentRef, CollapsibleContentProps>(
  (props, ref) => {
    const { className, ...restProps } = props

    return (
      <CollapsibleContentPrimitive
        ref={ref}
        data-slot='content'
        className={cn('render-ui-collapsible-content', className)}
        {...restProps}
      />
    )
  },
)

CollapsibleContent.displayName = 'CollapsibleContent'

export { CollapsibleContent }
