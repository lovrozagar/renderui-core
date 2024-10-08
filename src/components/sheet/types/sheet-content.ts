import type { Simplify } from '@/components/_shared/types/simplify'
import type {
	DialogContent as SheetContentPrimitive,
	DialogPortal as SheetPortalPrimitive,
} from '@radix-ui/react-dialog'
import type React from 'react'

import type { CrossSmallIcon } from '@/components/_shared/components/icons/cross-small-icon'
import type { NonNullableVariantProps } from '@/components/_shared/types/variant'
import type { ButtonProps } from '@/components/button/types/button'
import type { OverlayProps } from '@/components/overlay/types/overlay'
import type { sheetClasses } from '@/components/sheet/classes/sheet-classes'
import type { AnimationStyleVariables } from '@renderui/utils'

type SheetContentPrimitiveProps = React.ComponentPropsWithRef<typeof SheetContentPrimitive>

type SheetContentCustomProps = NonNullableVariantProps<typeof sheetClasses> & {
	portalProps?: React.ComponentPropsWithRef<typeof SheetPortalPrimitive>
	overlayProps?: OverlayProps
	closeButtonProps?: ButtonProps
	closeButtonIconProps?: React.ComponentPropsWithRef<typeof CrossSmallIcon>
	hasCloseButton?: boolean
	smallSizeWidth?: '3/4' | 'full'
} & AnimationStyleVariables

type SheetContentProps = Simplify<SheetContentPrimitiveProps & SheetContentCustomProps>

export type { SheetContentProps }
