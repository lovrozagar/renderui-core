'use client'

import {
  DialogContent as SheetContentPrimitive,
  DialogPortal as SheetPortalPrimitive,
} from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { cn, cx, getOptionalObject } from '@renderui/utils'
import React from 'react'

import { ModalClose } from '@/components/_shared/components/modal-close/modal-close'
import { Button } from '@/components/button'
import { Overlay } from '@/components/overlay'
import { sheetClasses } from '@/components/sheet/classes/sheet-classes'
import {
  DEFAULT_SHEET_CLOSE_BUTTON_CLASSNAME,
  DEFAULT_SHEET_CLOSE_BUTTON_ICON_CLASSNAME,
} from '@/components/sheet/constants/constants'
import { SheetContentProps, SheetContentRef } from '@/components/sheet/types/sheet-content'
import { VisuallyHidden } from '@/components/visually-hidden'

const SheetContent = React.forwardRef<SheetContentRef, SheetContentProps>((props, ref) => {
  const {
    className,
    children,
    portalProps,
    overlayProps,
    closeButtonProps,
    closeButtonIconProps,
    hasCloseButton = true,
    side = 'right',
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
    <SheetPortalPrimitive {...portalProps}>
      <Overlay {...overlayProps} />
      <SheetContentPrimitive
        ref={ref}
        className={cn(sheetClasses({ side }), className)}
        {...restProps}
      >
        {children}
        {hasCloseButton ? (
          <ModalClose asChild>
            <Button
              variant={variant}
              color={color}
              className={cx(DEFAULT_SHEET_CLOSE_BUTTON_CLASSNAME, closeButtonClassName)}
              {...restCloseButtonProps}
            >
              <Cross2Icon
                className={cn(DEFAULT_SHEET_CLOSE_BUTTON_ICON_CLASSNAME, closeButtonIconClassName)}
                {...restCloseButtonIconProps}
              />
              {closeButtonAriaLabel ? null : <VisuallyHidden>Close</VisuallyHidden>}
            </Button>
          </ModalClose>
        ) : null}
      </SheetContentPrimitive>
    </SheetPortalPrimitive>
  )
})

SheetContent.displayName = 'SheetContent'

export { SheetContent }
