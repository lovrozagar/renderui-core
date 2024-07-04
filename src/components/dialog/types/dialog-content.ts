import {
  DialogContent as DialogContentPrimitive,
  DialogPortal as DialogPortalPrimitive,
} from '@radix-ui/react-dialog'
import { Simplify } from '@/components/_shared/types/simplify'
import React from 'react'

import { CrossSmallIcon } from '@/components/_shared/components/icons/cross-small-icon'
import { AnimationStyleVariables } from '@/components/_shared/utils/get-animation-style-variables'
import { ButtonProps } from '@/components/button'

type DialogContentPrimitiveType = typeof DialogContentPrimitive

type DialogContentRef = React.ElementRef<DialogContentPrimitiveType>

type DialogContentPrimitiveProps = React.ComponentPropsWithRef<typeof DialogContentPrimitive>

type DialogContentRenderUIProps = {
  portalProps?: React.ComponentPropsWithoutRef<typeof DialogPortalPrimitive>
  overlayProps?: React.ComponentPropsWithoutRef<typeof DialogPortalPrimitive>
  closeButtonProps?: ButtonProps
  closeButtonIconProps?: React.ComponentPropsWithoutRef<typeof CrossSmallIcon>
  hasCloseButton?: boolean
}

type DialogContentProps = Simplify<DialogContentPrimitiveProps & DialogContentRenderUIProps> &
  AnimationStyleVariables

export type { DialogContentProps, DialogContentRef }
