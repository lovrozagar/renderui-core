import { DEFAULT_MENUBAR_ITEM_CLASSNAME } from '@/components/menubar/constants/constants'
import type { MenubarItemProps } from '@/components/menubar/types/menubar-item'
import { MenubarItem as MenubarItemPrimitive } from '@radix-ui/react-menubar'
import { cn } from '@renderui/utils'

const MenubarItem = (props: MenubarItemProps) => {
	const { className, inset, ...restProps } = props

	return (
		<MenubarItemPrimitive
			slot='item'
			className={cn(DEFAULT_MENUBAR_ITEM_CLASSNAME, inset && 'pl-8', className)}
			{...restProps}
		/>
	)
}

export { MenubarItem }
