import { CheckIcon } from '@/components/_shared/components/icons/check-icon'
import { DEFAULT_DROPDOWN_MENU_CHECKBOX_ITEM_CLASSNAME } from '@/components/dropdown-menu/constants/constants'
import type { DropdownMenuCheckboxItemProps } from '@/components/dropdown-menu/types/dropdown-menu-checkbox-item'
import {
	DropdownMenuCheckboxItem as DropdownMenuCheckboxItemPrimitive,
	DropdownMenuItemIndicator as DropdownMenuItemIndicatorPrimitive,
} from '@radix-ui/react-dropdown-menu'

import { cn } from '@renderui/utils'

const DropdownMenuCheckboxItem = (props: DropdownMenuCheckboxItemProps) => {
	const { className, children, ...restProps } = props

	return (
		<DropdownMenuCheckboxItemPrimitive
			data-slot='checkbox-item'
			className={cn(DEFAULT_DROPDOWN_MENU_CHECKBOX_ITEM_CLASSNAME, className)}
			{...restProps}
		>
			<span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
				<DropdownMenuItemIndicatorPrimitive>
					<CheckIcon className='h-4 w-4' />
				</DropdownMenuItemIndicatorPrimitive>
			</span>
			{children}
		</DropdownMenuCheckboxItemPrimitive>
	)
}

export { DropdownMenuCheckboxItem }
