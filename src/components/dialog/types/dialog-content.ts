import type { Simplify } from '@/components/_shared/types/simplify'
import type {
	DialogContent as DialogContentPrimitive,
	DialogPortal as DialogPortalPrimitive,
} from '@radix-ui/react-dialog'
import type React from 'react'

import type { CrossSmallIcon } from '@/components/_shared/components/icons/cross-small-icon'
import type { ButtonProps } from '@/components/button'
import type { AnimationStyleVariables } from '@renderui/utils'

type DialogContentPrimitiveProps = React.ComponentPropsWithRef<typeof DialogContentPrimitive>

type DialogContentRenderUIProps = {
	portalProps?: React.ComponentPropsWithRef<typeof DialogPortalPrimitive>
	overlayProps?: React.ComponentPropsWithRef<typeof DialogPortalPrimitive>
	closeButtonProps?: ButtonProps
	closeButtonIconProps?: React.ComponentPropsWithRef<typeof CrossSmallIcon>
	hasCloseButton?: boolean
}

type DialogContentProps = Simplify<DialogContentPrimitiveProps & DialogContentRenderUIProps> &
	AnimationStyleVariables

export type { DialogContentProps }
