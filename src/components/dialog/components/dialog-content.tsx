'use client'

import {
  DialogContent as DialogContentPrimitive,
  DialogPortal as DialogPortalPrimitive,
} from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { cn, cx, getOptionalObject } from '@renderui/utils'
import React from 'react'

import { Button } from '@/components/button/components/button'
import { DialogClose } from '@/components/dialog/components/dialog-close'
import {
  DEFAULT_DIALOG_CLOSE_BUTTON_CLASSNAME,
  DEFAULT_DIALOG_CLOSE_BUTTON_ICON_CLASSNAME,
  DFEAULT_DIALOG_CONTENT_CLASSNAME,
} from '@/components/dialog/constants/constants'
import { DialogContentProps, DialogContentRef } from '@/components/dialog/types/dialog-content'
import { Overlay } from '@/components/overlay/components/overlay'
import { VisuallyHidden } from '@/components/visually-hidden/components/visually-hidden'

const DialogContent = React.forwardRef<DialogContentRef, DialogContentProps>((props, ref) => {
  const {
    className,
    children,
    closeButtonProps,
    closeButtonIconProps,
    hasCloseButton = true,
    ...restProps
  } = props

  const {
    'className': closeButtonClassName,
    'aria-label': closeButtonAriaLabel,
    variant = 'ghost',
    color = 'mode-contrast',
    ...restCloseButtonProps
  } = getOptionalObject(closeButtonProps)

  const { className: closeButtonIconClassName, ...restCloseButtonIconProps } =
    getOptionalObject(closeButtonIconProps)

  return (
    <DialogPortalPrimitive>
      <Overlay />
      <DialogContentPrimitive
        ref={ref}
        className={cn(DFEAULT_DIALOG_CONTENT_CLASSNAME, className)}
        {...restProps}
      >
        {hasCloseButton ? (
          <DialogClose asChild className={cn(DEFAULT_DIALOG_CLOSE_BUTTON_CLASSNAME, className)}>
            <Button
              variant={variant}
              color={color}
              className={cx(DEFAULT_DIALOG_CLOSE_BUTTON_CLASSNAME, closeButtonClassName, className)}
              {...restCloseButtonProps}
            >
              <Cross2Icon
                className={cn(DEFAULT_DIALOG_CLOSE_BUTTON_ICON_CLASSNAME, closeButtonIconClassName)}
                {...restCloseButtonIconProps}
              />
              {closeButtonAriaLabel ? null : <VisuallyHidden>Close</VisuallyHidden>}
            </Button>
          </DialogClose>
        ) : null}
        {children}
      </DialogContentPrimitive>
    </DialogPortalPrimitive>
  )
})

DialogContent.displayName = 'DialogContent'

export { DialogContent }
