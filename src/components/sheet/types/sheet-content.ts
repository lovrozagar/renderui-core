import {
  DialogContent as SheetContentPrimitive,
  DialogPortal as SheetPortalPrimitive,
} from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { Simplify } from '@renderui/types'
import React from 'react'

import { NonNullableVariantProps } from '@/components/_shared/types/variants'
import { ButtonProps } from '@/components/button'
import { sheetClasses } from '@/components/sheet/classes/sheet-classes'
import { AnimationStyleVariaiables } from '@/components/_shared/utils/get-animation-style-variables'
import { OverlayProps } from '@/components/overlay'

type SheetContentPrimitiveType = typeof SheetContentPrimitive

type SheetContentRef = React.ElementRef<SheetContentPrimitiveType>

type SheetContentPrimitiveProps = React.ComponentPropsWithRef<typeof SheetContentPrimitive>

type SheetContentRenderUIProps = NonNullableVariantProps<typeof sheetClasses> & {
  portalProps?: React.ComponentPropsWithoutRef<typeof SheetPortalPrimitive>
  overlayProps?: OverlayProps
  closeButtonProps?: ButtonProps
  closeButtonIconProps?: React.ComponentPropsWithoutRef<typeof Cross2Icon>
  hasCloseButton?: boolean
} & AnimationStyleVariaiables

type SheetContentProps = Simplify<SheetContentPrimitiveProps & SheetContentRenderUIProps>

export type { SheetContentProps, SheetContentRef }
