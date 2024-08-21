import type { CrossSmallIcon } from '@/components/_shared/components/icons'
import type { ButtonProps } from '@/components/button'
import type { OverlayProps } from '@/components/overlay'
import type { Drawer as DrawerPrimitive } from 'vaul'

type DrawerContentProps = React.ComponentPropsWithRef<typeof DrawerPrimitive.Content> & {
	hasIndicator?: boolean
	indicatorProps?: React.ComponentPropsWithRef<'div'>
	closeButtonProps?: ButtonProps
	closeButtonIconProps?: React.ComponentPropsWithRef<typeof CrossSmallIcon>
	hasCloseButton?: boolean
	overlayProps?: OverlayProps
}

export type { DrawerContentProps }
