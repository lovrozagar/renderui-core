import { DialogTrigger as DialogTriggerPrimitive } from '@radix-ui/react-dialog'
import { cn } from '@renderui/utils'
import React from 'react'

import { Button } from '@/components/button/components/button'
import { DEFAULT_DIALOG_TRIGGER_CLASSNAME } from '@/components/dialog/constants/constants'
import { DialogTriggerProps, DialogTriggerRef } from '@/components/dialog/types/dialog-trigger'

const DialogTrigger = React.forwardRef<DialogTriggerRef, DialogTriggerProps>((props, ref) => {
  const { className, variant = 'solid', color = 'mode-accent', ...restProps } = props

  return (
    <DialogTriggerPrimitive asChild>
      <Button
        data-slot='trigger'
        ref={ref}
        color={color}
        variant={variant}
        className={cn(DEFAULT_DIALOG_TRIGGER_CLASSNAME, className)}
        {...restProps}
      />
    </DialogTriggerPrimitive>
  )
})

DialogTrigger.displayName = 'DialogTrigger'

export { DialogTrigger }
