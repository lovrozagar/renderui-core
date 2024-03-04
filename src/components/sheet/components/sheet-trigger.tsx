import { DialogTrigger as SheetTriggerPrimitive } from '@radix-ui/react-dialog'
import { cn } from '@renderui/utils'
import React from 'react'

import { Button } from '@/components/button'
import { DEFAULT_SHEET_TRIGGER_CLASSNAME } from '@/components/sheet/constants/constants'
import { SheetTriggerProps, SheetTriggerRef } from '@/components/sheet/types/sheet-trigger'

const SheetTrigger = React.forwardRef<SheetTriggerRef, SheetTriggerProps>((props, ref) => {
  const { className, children, variant = 'solid', color = 'mode-accent', ...restProps } = props

  return (
    <SheetTriggerPrimitive asChild>
      <Button
        ref={ref}
        color={color}
        variant={variant}
        className={cn(DEFAULT_SHEET_TRIGGER_CLASSNAME, className)}
        {...restProps}
      >
        {children}
      </Button>
    </SheetTriggerPrimitive>
  )
})

SheetTrigger.displayName = 'SheetTrigger'

export { SheetTrigger }
