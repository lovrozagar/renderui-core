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

type SheetContentPrimitiveType = typeof SheetContentPrimitive

type SheetContentRef = React.ElementRef<SheetContentPrimitiveType>

type SheetContentPrimitiveProps = React.ComponentPropsWithRef<typeof SheetContentPrimitive>

type SheetContentRenderUIProps = NonNullableVariantProps<typeof sheetClasses> & {
  portalProps?: React.ComponentPropsWithoutRef<typeof SheetPortalPrimitive>
  overlayProps?: React.ComponentPropsWithoutRef<typeof SheetPortalPrimitive>
  closeButtonProps?: ButtonProps
  closeButtonIconProps?: React.ComponentPropsWithoutRef<typeof Cross2Icon>
  hasCloseButton?: boolean
}

type SheetContentProps = Simplify<SheetContentPrimitiveProps & SheetContentRenderUIProps>

export type { SheetContentProps, SheetContentRef }
