import type { CrossSmallIcon } from '@/components/_shared/components/icons/cross-small-icon'
import type { ButtonProps } from '@/components/button/types/button'
import type { OverlayProps } from '@/components/overlay/types/overlay'
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
