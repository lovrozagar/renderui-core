'use client'

import { DialogClose as DialogClosePrimitive } from '@radix-ui/react-dialog'
import { cn } from '@renderui/utils'
import React from 'react'

type DialogClosePrimitiveType = typeof DialogClosePrimitive

type DialogCloseRef = React.ElementRef<DialogClosePrimitiveType>

type DialogCloseProps = React.ComponentProps<typeof DialogClosePrimitive>

const ModalClose = React.forwardRef<DialogCloseRef, DialogCloseProps>((props, ref) => {
  const { className, ...restProps } = props

  return (
    <DialogClosePrimitive
      ref={ref}
      className={cn('render-ui-modal-close', className)}
      {...restProps}
    />
  )
})

ModalClose.displayName = 'ModalClose'

export { ModalClose }
