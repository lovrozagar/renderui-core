'use client'

import {
  DialogContent as DialogContentPrimitive,
  DialogPortal as DialogPortalPrimitive,
} from '@radix-ui/react-dialog'
import { cn, cx, getOptionalObject } from '@renderui/utils'
import React from 'react'

import { CrossSmallIcon } from '@/components/_shared/components/icons/cross-small-icon'
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
import { getAnimationStyleVariables } from '@renderui/utils/get-animation-style-variables'

const DialogContent = React.forwardRef<DialogContentRef, DialogContentProps>((props, ref) => {
  const {
    className,
    style,
    children,
    closeButtonProps,
    closeButtonIconProps,
    animationInDuration,
    animationOutDuration,
    animationDuration,
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
        style={{
          ...getAnimationStyleVariables({
            ...props,
            defaultAnimationDuration: 200,
            defaultAnimationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }),
          ...style,
        }}
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
              <CrossSmallIcon
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
