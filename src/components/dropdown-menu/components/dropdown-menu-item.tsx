import { DEFAULT_DROPDOWN_MENU_ITEM_CLASSNAME } from '@/components/dropdown-menu/constants/constants'
import type { DropdownMenuItemProps } from '@/components/dropdown-menu/types/dropdown-menu-item'
import { DropdownMenuItem as DropdownMenuItemPrimitive } from '@radix-ui/react-dropdown-menu'
import { cn } from '@renderui/utils'

const DropdownMenuItem = (props: DropdownMenuItemProps) => {
	const { className, inset, ...restProps } = props

	return (
		<DropdownMenuItemPrimitive
			data-slot='item'
			className={cn(DEFAULT_DROPDOWN_MENU_ITEM_CLASSNAME, inset && 'pl-8', className)}
			{...restProps}
		/>
	)
}

export { DropdownMenuItem }
