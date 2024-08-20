import type { ButtonProps } from '@/button'
import type { CrossSmallIcon } from '@/components/_shared/components/icons'
import type { Drawer as DrawerPrimitive } from 'vaul'

type DrawerContentProps = React.ComponentPropsWithRef<typeof DrawerPrimitive.Content> & {
	hasIndicator?: boolean
	indicatorProps?: React.ComponentPropsWithRef<'div'>
	closeButtonProps?: ButtonProps
	closeButtonIconProps?: React.ComponentPropsWithRef<typeof CrossSmallIcon>
	hasCloseButton?: boolean
}

export type { DrawerContentProps }
