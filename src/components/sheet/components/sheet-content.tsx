'use client'

import {
  DialogContent as SheetContentPrimitive,
  DialogPortal as SheetPortalPrimitive,
} from '@radix-ui/react-dialog'
import { cn, cx, getOptionalObject } from '@renderui/utils'
import React from 'react'

import { ModalClose } from '@/components/_shared/components/modal-close/modal-close'
import { getAnimationStyleVariables } from '@/components/_shared/utils/get-animation-style-variables'
import { Button } from '@/components/button'
import { Overlay } from '@/components/overlay'
import { sheetClasses } from '@/components/sheet/classes/sheet-classes'
import {
  DEFAULT_SHEET_CLOSE_BUTTON_CLASSNAME,
  DEFAULT_SHEET_CLOSE_BUTTON_ICON_CLASSNAME,
} from '@/components/sheet/constants/constants'
import { SheetContentProps, SheetContentRef } from '@/components/sheet/types/sheet-content'
import { VisuallyHidden } from '@/components/visually-hidden'
import { CrossSmallIcon } from '@/components/_shared/components/icons/cross-small-icon'

const SheetContent = React.forwardRef<SheetContentRef, SheetContentProps>((props, ref) => {
  const {
    className,
    style,
    children,
    portalProps,
    overlayProps,
    closeButtonProps,
    closeButtonIconProps,
    animationDuration,
    animationInDuration,
    animationOutDuration,
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
        {children}
        {hasCloseButton ? (
          <ModalClose asChild>
            <Button
              variant={variant}
              color={color}
              className={cx(DEFAULT_SHEET_CLOSE_BUTTON_CLASSNAME, closeButtonClassName)}
              {...restCloseButtonProps}
            >
              <CrossSmallIcon
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
