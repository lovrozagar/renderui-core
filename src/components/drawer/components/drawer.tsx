import type { DrawerProps } from '@/components/drawer/types/drawer'
import { Drawer as DrawerPrimitive } from 'vaul'

const Drawer = (props: DrawerProps) => {
	const { shouldScaleBackground = true, ...restProps } = props

	return <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...restProps} />
}

export { Drawer }
