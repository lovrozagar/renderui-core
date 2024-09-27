import { DEFAULT_DROPDOWN_MENU_TRIGGER_CLASSNAME } from '@/components/dropdown-menu/constants/constants'
import type { DropdownMenuTriggerProps } from '@/components/dropdown-menu/types/dropdown-menu-trigger'
import { DropdownMenuTrigger as DropdownMenuTriggerPrimitive } from '@radix-ui/react-dropdown-menu'
import { cn } from '@renderui/utils'

const DropdownMenuTrigger = (props: DropdownMenuTriggerProps) => {
	const { className, ...restProps } = props

	return (
		<DropdownMenuTriggerPrimitive
			className={cn(DEFAULT_DROPDOWN_MENU_TRIGGER_CLASSNAME)}
			{...restProps}
		/>
	)
}

export { DropdownMenuTrigger }
