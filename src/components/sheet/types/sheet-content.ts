import {
	DialogContent as SheetContentPrimitive,
	DialogPortal as SheetPortalPrimitive,
} from '@radix-ui/react-dialog'
import { Simplify } from '@/components/_shared/types/simplify'
import React from 'react'

import { CrossSmallIcon } from '@/components/_shared/components/icons/cross-small-icon'
import { NonNullableVariantProps } from '@/components/_shared/types/variants'
import { ButtonProps } from '@/components/button'
import { OverlayProps } from '@/components/overlay'
import { sheetClasses } from '@/components/sheet/classes/sheet-classes'
import { AnimationStyleVariables } from '@renderui/utils/get-animation-style-variables'

type SheetContentPrimitiveProps = React.ComponentPropsWithRef<typeof SheetContentPrimitive>

type SheetContentRenderUIProps = NonNullableVariantProps<typeof sheetClasses> & {
	portalProps?: React.ComponentPropsWithRef<typeof SheetPortalPrimitive>
	overlayProps?: OverlayProps
	closeButtonProps?: ButtonProps
	closeButtonIconProps?: React.ComponentPropsWithRef<typeof CrossSmallIcon>
	hasCloseButton?: boolean
} & AnimationStyleVariables

type SheetContentProps = Simplify<SheetContentPrimitiveProps & SheetContentRenderUIProps>

export type { SheetContentProps }
