import {
  DialogContent as SheetContentPrimitive,
  DialogPortal as SheetPortalPrimitive,
} from '@radix-ui/react-dialog'
import { Simplify } from '@/components/_shared/types/simplify'
import React from 'react'

import { CrossSmallIcon } from '@/components/_shared/components/icons/cross-small-icon'
import { NonNullableVariantProps } from '@/components/_shared/types/variants'
import { AnimationStyleVariables } from '@/components/_shared/utils/get-animation-style-variables'
import { ButtonProps } from '@/components/button'
import { OverlayProps } from '@/components/overlay'
import { sheetClasses } from '@/components/sheet/classes/sheet-classes'

type SheetContentPrimitiveType = typeof SheetContentPrimitive

type SheetContentRef = React.ElementRef<SheetContentPrimitiveType>

type SheetContentPrimitiveProps = React.ComponentPropsWithRef<typeof SheetContentPrimitive>

type SheetContentRenderUIProps = NonNullableVariantProps<typeof sheetClasses> & {
  portalProps?: React.ComponentPropsWithoutRef<typeof SheetPortalPrimitive>
  overlayProps?: OverlayProps
  closeButtonProps?: ButtonProps
  closeButtonIconProps?: React.ComponentPropsWithoutRef<typeof CrossSmallIcon>
  hasCloseButton?: boolean
} & AnimationStyleVariables

type SheetContentProps = Simplify<SheetContentPrimitiveProps & SheetContentRenderUIProps>

export type { SheetContentProps, SheetContentRef }
