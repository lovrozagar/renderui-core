import { DEFAULT_DROPDOWN_MENU_LABEL_CLASSNAME } from '@/components/dropdown-menu/constants/constants'
import type { DropdownMenuLabelProps } from '@/components/dropdown-menu/types/dropdown-menu-label'
import { DropdownMenuLabel as DropdownMenuLabelPrimitive } from '@radix-ui/react-dropdown-menu'
import { cn } from '@renderui/utils'

const DropdownMenuLabel = (props: DropdownMenuLabelProps) => {
	const { className, inset, ...restProps } = props

	return (
		<DropdownMenuLabelPrimitive
			data-slot='label'
			className={cn(DEFAULT_DROPDOWN_MENU_LABEL_CLASSNAME, inset && 'pl-8', className)}
			{...restProps}
		/>
	)
}

export { DropdownMenuLabel }
