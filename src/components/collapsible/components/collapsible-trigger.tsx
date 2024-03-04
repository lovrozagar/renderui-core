import { CollapsibleTrigger as CollapsibleTriggerPrimitive } from '@radix-ui/react-collapsible'
import { cx } from '@renderui/utils'
import React from 'react'

import { Button } from '@/components/button'
import {
  CollapsibleTriggerProps,
  CollapsibleTriggerRef,
} from '@/components/collapsible/types/collapsible-trigger'

const CollapsibleTrigger = React.forwardRef<CollapsibleTriggerRef, CollapsibleTriggerProps>(
  (props, ref) => {
    const { className, variant = 'solid', color = 'mode-accent' } = props

    return (
      <CollapsibleTriggerPrimitive asChild>
        <Button
          data-slot='trigger'
          ref={ref}
          variant={variant}
          color={color}
          className={cx('render-ui-collapsible-trigger', className)}
          {...props}
        />
      </CollapsibleTriggerPrimitive>
    )
  },
)

CollapsibleTrigger.displayName = 'CollapsibleTrigger'

export { CollapsibleTrigger }
