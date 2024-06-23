import {
  DialogContent as DialogContentPrimitive,
  DialogPortal as DialogPortalPrimitive,
} from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { Simplify } from '@renderui/types'
import React from 'react'

import { ButtonProps } from '@/components/button'
import { AnimationStyleVariaiables } from '@/components/_shared/utils/get-animation-style-variables'

type DialogContentPrimitiveType = typeof DialogContentPrimitive

type DialogContentRef = React.ElementRef<DialogContentPrimitiveType>

type DialogContentPrimitiveProps = React.ComponentPropsWithRef<typeof DialogContentPrimitive>

type DialogContentRenderUIProps = {
  portalProps?: React.ComponentPropsWithoutRef<typeof DialogPortalPrimitive>
  overlayProps?: React.ComponentPropsWithoutRef<typeof DialogPortalPrimitive>
  closeButtonProps?: ButtonProps
  closeButtonIconProps?: React.ComponentPropsWithoutRef<typeof Cross2Icon>
  hasCloseButton?: boolean
}

type DialogContentProps = Simplify<DialogContentPrimitiveProps & DialogContentRenderUIProps> &
  AnimationStyleVariaiables

export type { DialogContentProps, DialogContentRef }
