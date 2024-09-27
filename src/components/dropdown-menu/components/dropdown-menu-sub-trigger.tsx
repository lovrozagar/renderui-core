import { ChevronRightIcon } from '@/components/_shared/components/icons/chevron-right-icon'
import { DEFAULT_DROPDOWN_MENU_SUB_TRIGGER_CLASSNAME } from '@/components/dropdown-menu/constants/constants'
import type { DropdownMenuSubTriggerProps } from '@/components/dropdown-menu/types/dropdown-menu-sub-trigger'
import { DropdownMenuSubTrigger as DropdownMenuSubTriggerPrimitive } from '@radix-ui/react-dropdown-menu'
import { cn } from '@renderui/utils'

const DropdownMenuSubTrigger = (props: DropdownMenuSubTriggerProps) => {
	const { className, inset, children, ...restProps } = props

	return (
		<DropdownMenuSubTriggerPrimitive
			data-slot='sub-trigger'
			className={cn(DEFAULT_DROPDOWN_MENU_SUB_TRIGGER_CLASSNAME, inset && 'pl-8', className)}
			{...restProps}
		>
			{children}
			<ChevronRightIcon className='ml-auto h-4 w-4' />
		</DropdownMenuSubTriggerPrimitive>
	)
}

export { DropdownMenuSubTrigger }
