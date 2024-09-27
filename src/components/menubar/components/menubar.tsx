import { DEFAULT_MENUBAR_CLASSNAME } from '@/components/menubar/constants/constants'
import type { MenubarProps } from '@/components/menubar/types/menubar'
import { Menubar as MenubarPrimitive } from '@radix-ui/react-menubar'
import { cn } from '@renderui/utils'

const Menubar = (props: MenubarProps) => {
	const { className, ...restProps } = props

	return (
		<MenubarPrimitive
			slot='base'
			className={cn(DEFAULT_MENUBAR_CLASSNAME, className)}
			{...restProps}
		/>
	)
}

export { Menubar }
