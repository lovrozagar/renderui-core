import { DEFAULT_DROPDOWN_MENU_SEPARATOR_CLASSNAME } from '@/components/dropdown-menu/constants/constants'
import {
	DropdownMenuSeparator as DropdownMenuSeparatorPrimitive,
	type DropdownMenuSeparatorProps,
} from '@radix-ui/react-dropdown-menu'
import { cn } from '@renderui/utils'

const DropdownMenuSeparator = (props: DropdownMenuSeparatorProps) => {
	const { className, ...restProps } = props

	return (
		<DropdownMenuSeparatorPrimitive
			data-slot='separator'
			className={cn(DEFAULT_DROPDOWN_MENU_SEPARATOR_CLASSNAME, className)}
			{...restProps}
		/>
	)
}

export { DropdownMenuSeparator }
